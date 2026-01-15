window.ROBO_LEVELS = [
    {
        "id": 1,
        "name": "Level 1: 始まりの予感",
        "grid": [
            [0, 5, 0],
            [0, 6, 0],
            [0, 7, 0],
            [0, 5, 0],
            [0, 6, 0],
            [0, 7, 0],
            [0, 1, 0],
        ],
        "startPos": { "x": 1, "y": 0 },
        "startDir": 2,
        "configs": {
            "f0": { "limit": 2 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 2,
        "name": "Level 2: 昨日の忘れ物",
        "grid": [
            [0, 0, 0, 0, 0, 0, 0, 0, 6, 2],
            [0, 0, 0, 0, 0, 0, 0, 6, 6, 0],
            [0, 0, 0, 0, 0, 0, 6, 6, 0, 0],
            [0, 0, 0, 0, 0, 6, 6, 0, 0, 0],
            [0, 0, 0, 0, 6, 6, 0, 0, 0, 0],
            [0, 0, 0, 6, 6, 0, 0, 0, 0, 0],
            [0, 0, 6, 6, 0, 0, 0, 0, 0, 0],
            [0, 6, 6, 0, 0, 0, 0, 0, 0, 0],
            [6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        "startPos": { "x": 0, "y": 8 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 5 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 3,
        "name": "Level 3: 遠い日の落書き",
        "grid": [
            [0, 2, 6, 0, 0, 0, 0, 0],
            [0, 0, 6, 6, 0, 0, 0, 0],
            [0, 0, 0, 6, 6, 0, 0, 0],
            [0, 0, 0, 0, 6, 6, 0, 0],
            [0, 0, 0, 0, 0, 6, 3, 0],
            [0, 0, 0, 0, 0, 6, 3, 0],
            [0, 0, 0, 0, 6, 6, 0, 0],
            [0, 0, 0, 6, 6, 0, 0, 0],
            [0, 0, 6, 6, 0, 0, 0, 0],
            [0, 6, 6, 0, 0, 0, 0, 0],
        ],
        "startPos": { "x": 1, "y": 9 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 5 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 4,
        "name": "Level 4: 双璧のしらべ",
        "grid": [
            [0, 0, 0, 0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 7, 5, 5, 5, 5, 5, 6, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 0],
        ],
        "startPos": { "x": 1, "y": 5 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 6 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": true, "green": false },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 5,
        "name": "Level 5: 逃げるんじゃねぇぞ",
        "grid": [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 7, 7, 7, 7, 6, 7, 7, 7, 7, 1],
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        "startPos": { "x": 5, "y": 6 },
        "startDir": 4,
        "configs": {
            "f0": { "limit": 4 }, "f1": { "limit": 3 }, "f2": null,
            "paint": { "red": false, "blue": false, "green": true },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 6,
        "name": "Level 6: 暁の境界線",
        "grid": [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [5, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        "startPos": { "x": 10, "y": 2 },
        "startDir": 3,
        "configs": {
            "f0": { "limit": 3 }, "f1": { "limit": 3 }, "f2": null,
            "paint": { "red": false, "blue": false, "green": false },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    },
    {
        "id": 7,
        "name": "Level 7: 誰のものでもない地図",
        "grid": [
            [7, 1, 5, 7, 5, 1, 5, 6, 3],
            [5, 0, 0, 5, 0, 0, 0, 5, 0],
            [5, 0, 0, 5, 0, 0, 0, 5, 0],
            [1, 0, 0, 1, 0, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 0, 1, 0],
            [5, 0, 0, 5, 0, 0, 0, 5, 0],
            [5, 0, 0, 5, 0, 0, 0, 5, 0],
            [7, 1, 5, 7, 5, 1, 5, 6, 0]
        ],
        "startPos": { "x": 3, "y": 0 },
        "startDir": 1,
        "configs": {
            "f0": { "limit": 6 }, "f1": null, "f2": null,
            "paint": { "red": false, "blue": true, "green": true },
            "conditions": { "red": true, "blue": true, "green": true }
        }
    }
];
