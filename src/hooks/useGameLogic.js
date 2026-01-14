import { useState, useEffect, useRef, useCallback } from 'react';
import { LEVELS, TILE_TYPES } from '../data/levels';

const COMMANDS = {
    FORWARD: 'FORWARD',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    F0: 'F0'
};

const DIRECTIONS = [
    { x: 0, y: -1 }, // 0: Up
    { x: 1, y: 0 },  // 1: Right
    { x: 0, y: 1 },  // 2: Down
    { x: -1, y: 0 }  // 3: Left
];

const MAX_STEPS = 50; // Safety break for loops

export function useGameLogic() {
    const [levelIndex, setLevelIndex] = useState(0);
    const [level, setLevel] = useState(LEVELS[0]);

    // Robot state
    const [robot, setRobot] = useState({ x: 0, y: 0, dir: 0 });
    const [isReset, setIsReset] = useState(true);

    // Program state
    const [program, setProgram] = useState([]);

    // Execution state
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameStatus, setGameStatus] = useState('IDLE'); // IDLE, RUNNING, WON, LOST
    const [activeCommandIndex, setActiveCommandIndex] = useState(-1);

    const stepCountRef = useRef(0);
    const timerRef = useRef(null);

    // Initialize level
    useEffect(() => {
        loadLevel(levelIndex);
    }, [levelIndex]);

    const loadLevel = (idx) => {
        const lvl = LEVELS[idx];
        setLevel(lvl);
        // Find start pos
        let startX = 0, startY = 0;
        lvl.grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === TILE_TYPES.START) {
                    startX = x;
                    startY = y;
                }
            });
        });

        const initialRobot = { x: startX, y: startY, dir: lvl.startDir };
        setRobot(initialRobot);
        setIsReset(true);
        setProgram([]);
        setGameStatus('IDLE');
        setIsPlaying(false);
        setActiveCommandIndex(-1);
        stopTimer();
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const resetGame = () => {
        setIsPlaying(false);
        setGameStatus('IDLE');
        setActiveCommandIndex(-1);
        stopTimer();

        // Reset robot position
        let startX = 0, startY = 0;
        level.grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === TILE_TYPES.START) {
                    startX = x;
                    startY = y;
                }
            });
        });
        setRobot({ x: startX, y: startY, dir: level.startDir });
        setIsReset(true);
    };

    const addCommand = (cmd) => {
        if (program.length < level.maxCommands && gameStatus === 'IDLE') {
            setProgram([...program, cmd]);
        }
    };

    const removeCommand = (index) => {
        if (gameStatus === 'IDLE') {
            const newProg = [...program];
            newProg.splice(index, 1);
            setProgram(newProg);
        }
    };

    const runProgram = () => {
        if (program.length === 0) return;
        if (gameStatus === 'WON') {
            resetGame();
            return;
        }

        setIsPlaying(true);
        setGameStatus('RUNNING');
        setIsReset(false);
        stepCountRef.current = 0;

        // We need a way to track the conceptual "program counter" across recursion
        // For simple F0 recursion, we can just maintain a flattened queue or index?
        // Actually, "F0 calls F0" means we simply reset the index to 0.

        let currentPC = 0;

        timerRef.current = setInterval(() => {
            if (stepCountRef.current > MAX_STEPS) {
                stopTimer();
                setGameStatus('LOST'); // Took too long
                setIsPlaying(false);
                return;
            }

            // Execute Logic
            // Since we need to update state and wait for render, this interval approach handles the pacing

            // Need to access current state inside interval, but state is stale in closure.
            // We'll use the functional updates or Refs for mutable logic, but React render cycle is safer.
            // Better pattern: useEffect that triggers on 'isPlaying' and a 'tick'.
        }, 500);

        // Actually, let's use a useEffect based loop instead of setInterval in the imperative handler
    };

    // Re-implementing the loop using useEffect
    useEffect(() => {
        if (!isPlaying || gameStatus !== 'RUNNING') return;

        const tick = setTimeout(() => {
            step();
        }, 500); // 500ms per step

        return () => clearTimeout(tick);
    }, [isPlaying, robot, activeCommandIndex, gameStatus]); // Dependencies trigger next step

    const step = useCallback(() => {
        let nextIndex = activeCommandIndex + 1;

        // Handle F0 recursion logic
        // If we just finished the last command, stop?
        // The "F0" command itself should trigger the jump.

        // Wait, "activeCommandIndex" points to the command we JUST executed? Or are about to?
        // Let's say it points to the command we are ABOUT to execute.
        // Initial: -1. Next: 0.

        let currentCmd = program[nextIndex];

        if (!currentCmd) {
            // End of program
            stopTimer();
            setIsPlaying(false);
            setGameStatus('LOST'); // Ran out of commands without reaching goal?
            // Or maybe we just stop and see where we are.
            return;
        }

        stepCountRef.current += 1;
        if (stepCountRef.current > MAX_STEPS) {
            setIsPlaying(false);
            setGameStatus('LOST');
            return;
        }

        // Process Command
        let newRobot = { ...robot };
        let jumpToStart = false;

        switch (currentCmd) {
            case COMMANDS.FORWARD:
                const d = DIRECTIONS[newRobot.dir];
                const nx = newRobot.x + d.x;
                const ny = newRobot.y + d.y;

                // Check bounds and validity
                if (
                    ny >= 0 && ny < level.grid.length &&
                    nx >= 0 && nx < level.grid[0].length &&
                    level.grid[ny][nx] !== TILE_TYPES.VOID &&
                    level.grid[ny][nx] !== TILE_TYPES.OBSTACLE
                ) {
                    newRobot.x = nx;
                    newRobot.y = ny;
                } else {
                    // Hit wall/void - stay put or crash?
                    // For now stay put. 
                }
                break;
            case COMMANDS.LEFT:
                newRobot.dir = (newRobot.dir + 3) % 4;
                break;
            case COMMANDS.RIGHT:
                newRobot.dir = (newRobot.dir + 1) % 4;
                break;
            case COMMANDS.F0:
                jumpToStart = true;
                break;
        }

        setRobot(newRobot);

        // Check Goal
        if (level.grid[newRobot.y][newRobot.x] === TILE_TYPES.GOAL) {
            setGameStatus('WON');
            setIsPlaying(false);
            setActiveCommandIndex(jumpToStart ? -1 : nextIndex); // Cosmetic
            return;
        }

        if (jumpToStart) {
            setActiveCommandIndex(-1); // Next tick will be 0
        } else {
            setActiveCommandIndex(nextIndex);
        }

    }, [activeCommandIndex, program, robot, level, gameStatus]);


    const nextLevel = () => {
        if (levelIndex < LEVELS.length - 1) {
            setLevelIndex(prev => prev + 1);
        } else {
            setLevelIndex(0);
        }
    };

    return {
        level,
        robot,
        program,
        isPlaying,
        gameStatus,
        activeCommandIndex,
        addCommand,
        removeCommand,
        runProgram,
        resetGame,
        nextLevel,
        COMMANDS
    };
}
