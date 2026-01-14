import React from 'react';
import { TILE_TYPES } from '../data/levels';
import { ChevronUp, Play, Square, RotateCcw } from 'lucide-react';

const TILE_COLORS = {
    [TILE_TYPES.VOID]: 'transparent',
    [TILE_TYPES.PATH]: 'var(--primary)',
    [TILE_TYPES.START]: 'var(--secondary)',
    [TILE_TYPES.GOAL]: 'var(--danger)',
    [TILE_TYPES.OBSTACLE]: '#9ca3af'
};

export const Board = ({ level, robot }) => {
    const rows = level.grid.length;
    const cols = level.grid[0].length;

    // 60px size + 8px gap
    const STRIDE = 68;

    return (
        <div className="glass-panel" style={{ position: 'relative' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, var(--grid-cell-size))`,
                    gridTemplateRows: `repeat(${rows}, var(--grid-cell-size))`,
                    gap: 'var(--grid-gap)'
                }}
            >
                {level.grid.map((row, y) => (
                    row.map((cell, x) => (
                        <div
                            key={`${x}-${y}`}
                            className="flex-center"
                            style={{
                                backgroundColor: TILE_COLORS[cell],
                                borderRadius: '8px',
                                opacity: cell === TILE_TYPES.VOID ? 0.05 : 1,
                                boxShadow: cell !== TILE_TYPES.VOID ? 'inset 0 -4px 0 rgba(0,0,0,0.2)' : 'none',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                            }}
                        >
                            {cell === TILE_TYPES.START && 'S'}
                            {cell === TILE_TYPES.GOAL && 'G'}
                            {cell === TILE_TYPES.PATH && '★'}
                        </div>
                    ))
                ))}
            </div>

            {/* Robot Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: '24px', // matching padding of glass-panel
                    left: '24px',
                    width: 'var(--grid-cell-size)',
                    height: 'var(--grid-cell-size)',
                    transform: `translate(${robot.x * STRIDE}px, ${robot.y * STRIDE}px)`,
                    transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#facc15', // Yellow
                        borderRadius: '8px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: `rotate(${robot.dir * 90}deg)`,
                        transition: 'transform 0.4s ease-in-out',
                        zIndex: 10
                    }}
                >
                    <ChevronUp size={40} color="#1f2937" strokeWidth={3} />
                </div>
            </div>
        </div>
    );
};
