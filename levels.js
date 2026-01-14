window.ROBO_LEVELS = [
    {
        "id": 1,
        "name": "Level 1: First Steps",
        "grid": [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 5, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "startPos": { "x": 1, "y": 1 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 8 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": false, "blue": false, "green": false }
        }
    },
    {
        "id": 2,
        "name": "Level 2: The Loop",
        "grid": [
            [0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "startPos": { "x": 2, "y": 0 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 8 }, "f1": { "limit": 4 }, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": false, "blue": false, "green": false }
        }
    },
    {
        "id": 3,
        "name": "Level 3: Complex Path",
        "grid": [
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "startPos": { "x": 0, "y": 0 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 12 }, "f1": { "limit": 4 }, "f2": { "limit": 4 },
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": false, "blue": false, "green": false }
        }
    }
];
