import React from 'react';
import { ArrowUp, CornerUpLeft, CornerUpRight, Play, Square, RotateCcw, FastForward, Repeat } from 'lucide-react';

export const Controls = ({
    program,
    maxCommands,
    activeCommandIndex,
    onAddCommand,
    onRemoveCommand,
    onPlay,
    onReset,
    isPlaying,
    COMMANDS
}) => {

    const getIcon = (cmd) => {
        switch (cmd) {
            case COMMANDS.FORWARD: return <ArrowUp size={24} />;
            case COMMANDS.LEFT: return <CornerUpLeft size={24} />;
            case COMMANDS.RIGHT: return <CornerUpRight size={24} />;
            case COMMANDS.F0: return <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>f0</span>;
            default: return null;
        }
    };

    const getColor = (cmd) => {
        switch (cmd) {
            case COMMANDS.FORWARD: return '#e5e7eb'; // gray-200
            case COMMANDS.LEFT: return '#93c5fd'; // blue-300
            case COMMANDS.RIGHT: return '#fca5a5'; // red-300
            case COMMANDS.F0: return '#86efac'; // green-300
            default: return '#f3f4f6';
        }
    };

    return (
        <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', marginTop: '24px' }}>

            {/* Header / Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span>Main Function</span>
                <span>{program.length} / {maxCommands} slots</span>
            </div>

            {/* Program Slots */}
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '24px',
                    minHeight: '60px',
                    overflowX: 'auto',
                    paddingBottom: '8px'
                }}
            >
                {Array.from({ length: maxCommands }).map((_, i) => {
                    const cmd = program[i];
                    const isActive = i === activeCommandIndex;

                    return (
                        <button
                            key={i}
                            onClick={() => cmd && onRemoveCommand(i)}
                            className="flex-center"
                            style={{
                                width: '60px',
                                height: '60px',
                                minWidth: '60px',
                                borderRadius: '12px',
                                border: isActive ? '3px solid var(--primary)' : '2px dashed #d1d5db',
                                background: cmd ? getColor(cmd) : 'transparent',
                                cursor: cmd ? 'pointer' : 'default',
                                color: '#374151',
                                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all 0.2s',
                                boxShadow: isActive ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
                            }}
                        >
                            {cmd && getIcon(cmd)}
                        </button>
                    );
                })}
            </div>

            <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.1)', marginBottom: '24px' }}></div>

            {/* Command Palette & Play Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Commands */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                        { id: COMMANDS.LEFT, icon: <CornerUpLeft />, color: '#93c5fd' },
                        { id: COMMANDS.FORWARD, icon: <ArrowUp />, color: '#e5e7eb' },
                        { id: COMMANDS.RIGHT, icon: <CornerUpRight />, color: '#fca5a5' },
                        { id: COMMANDS.F0, icon: <span style={{ fontWeight: 900 }}>f0</span>, color: '#86efac' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onAddCommand(item.id)}
                            disabled={isPlaying || program.length >= maxCommands}
                            className="btn-icon flex-center"
                            style={{
                                width: '50px',
                                height: '50px',
                                background: item.color,
                                opacity: (isPlaying || program.length >= maxCommands) ? 0.5 : 1,
                                cursor: (isPlaying || program.length >= maxCommands) ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>

                {/* Play Controls */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    {!isPlaying ? (
                        <button
                            className="btn btn-primary"
                            onClick={onPlay}
                            disabled={program.length === 0}
                            style={{ padding: '12px 24px', fontSize: '1.1rem' }}
                        >
                            <Play size={20} fill="currentColor" /> Run
                        </button>
                    ) : (
                        <button
                            className="btn"
                            onClick={onReset}
                            style={{ background: '#ef4444', color: 'white', padding: '12px 24px' }}
                        >
                            <Square size={20} fill="currentColor" /> Stop
                        </button>
                    )}

                    <button
                        className="btn-icon"
                        onClick={onReset}
                        title="Reset"
                    >
                        <RotateCcw size={20} />
                    </button>
                </div>

            </div>

        </div>
    );
};
