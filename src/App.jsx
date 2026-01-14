import React from 'react';
import { Board } from './components/Board';
import { Controls } from './components/Controls';
import { useGameLogic } from './hooks/useGameLogic';
import { Play, RotateCcw } from 'lucide-react';

function App() {
    const {
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
    } = useGameLogic();

    return (
        <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>

            {/* Background Blobs */}
            <div style={{
                position: 'fixed', top: '-20%', left: '-10%', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }} />
            <div style={{
                position: 'fixed', bottom: '-20%', right: '-10%', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(52,211,153,0.3) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }} />

            {/* Header */}
            <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                Robo Logic
            </h1>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {level.name}
            </div>

            {/* Game Board */}
            <Board level={level} robot={robot} />

            {/* Controls */}
            <Controls
                program={program}
                maxCommands={level.maxCommands}
                activeCommandIndex={activeCommandIndex}
                onAddCommand={addCommand}
                onRemoveCommand={removeCommand}
                onPlay={runProgram}
                onReset={resetGame}
                isPlaying={isPlaying}
                COMMANDS={COMMANDS}
            />

            {/* Win/Loss Modal */}
            {(gameStatus === 'WON' || gameStatus === 'LOST') && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100
                }}>
                    <div className="glass-panel" style={{ background: 'white', padding: '40px', textAlign: 'center', maxWidth: '400px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: gameStatus === 'WON' ? 'var(--secondary)' : 'var(--danger)' }}>
                            {gameStatus === 'WON' ? 'Level Cleared!' : 'Try Again'}
                        </h2>
                        <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
                            {gameStatus === 'WON'
                                ? "Great job! You guided the robot to the goal."
                                : "The robot didn't reach the goal or ran out of battery."}
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={gameStatus === 'WON' ? nextLevel : resetGame}
                            style={{ width: '100%', padding: '12px' }}
                        >
                            {gameStatus === 'WON' ? 'Next Level' : 'Retry'}
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default App;
