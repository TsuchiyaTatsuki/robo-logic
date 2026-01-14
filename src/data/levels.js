export const LEVELS = [
    {
        id: 1,
        name: "Level 1",
        // 0: Void, 1: Path (Blue), 2: Start (Green), 3: Goal (Red)
        grid: [
            [0, 0, 0, 0, 0, 0],
            [0, 2, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        startDir: 1, // 0: Up, 1: Right, 2: Down, 3: Left
        maxCommands: 4,
        items: []
    },
    {
        id: 2,
        name: "The Loop",
        grid: [
            [0, 0, 2, 1, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        startDir: 1,
        maxCommands: 5,
        items: []
    },
    // Based on user screenshot roughly
    {
        id: 3,
        name: "Complex Path",
        grid: [
            [2, 1, 1, 1, 1, 3],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        startDir: 1,
        maxCommands: 8,
        items: []
    }
];

export const TILE_TYPES = {
    VOID: 0,
    PATH: 1,
    START: 2,
    GOAL: 3,
    OBSTACLE: 4
};
