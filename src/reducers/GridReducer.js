const GridReducer = (state = [], action) => {
    let newGrid = state;
    let originalGrid = state;
    let h;
    let w;
    let random_bool;
    let livingCount;
    switch (action.type) {
        case 'CREATE_GRID':
            h = parseInt(action.height, 10);
            w = parseInt(action.width, 10);
            originalGrid = new Array(h).fill(0);
            originalGrid = originalGrid.map(row => new Array(w).fill(0));
            random_bool;
            for (let i = 0; i < action.height; i++) {
                for (let j = 0; j < action.width; j++) {
                    random_bool = Math.random() <= 0.5; // 50% chance of being alive (to make it easier to see its working properly)
                    originalGrid[i][j] = random_bool;
                }
            }
            return originalGrid;
        case 'UPDATE_GRID':
            livingCount;
            for (let i = 0; i < newGrid.length; i++) {
                for (let j = 0; j < newGrid[i].length; j++) {
                    livingCount = 0;
                    if (i > 0 && j > 0) {
                        if (newGrid[i - 1][j - 1] === true) {
                            livingCount++;
                        }
                    }
                    if (i > 0) {
                        if (newGrid[i - 1][j] === true) {
                            livingCount++;
                        }
                    }
                    if (i > 0 && j < newGrid[i].length - 1) {
                        if (newGrid[i - 1][j + 1] === true) {
                            livingCount++;
                        }
                    }
                    if (j > 0) {
                        if (newGrid[i][j - 1] === true) {
                            livingCount++;
                        }
                    }
                    if (j < newGrid[i].length - 1) {
                        if (newGrid[i][j + 1] === true) {
                            livingCount++;
                        }
                    }
                    if (i > 0 && j > 0) {
                        if (newGrid[i - 1][j - 1] === true) {
                            livingCount++;
                        }
                    }
                    if (i < newGrid.length - 1 && j > 0) {
                        if (newGrid[i + 1][j - 1] === true) {
                            livingCount++;
                        }
                    }
                    if (i < newGrid.length - 1) {
                        if (newGrid[i + 1][j] === true) {
                            livingCount++;
                        }
                    }
                    if (i < newGrid.length - 1 && j < newGrid[i].length - 1) {
                        if (newGrid[i + 1][j + 1] === true) {
                            livingCount++;
                        }
                    }
                    if (newGrid[i][j] === true && livingCount < 2) {
                        newGrid[i][j] = false;
                    } else if (
                        newGrid[i][j] === true &&
                        (livingCount === 2 || livingCount === 3)
                    ) {
                        newGrid[i][j] = true;
                    } else if (newGrid[i][j] === true && livingCount > 3) {
                        newGrid[i][j] = false;
                    }
                    if (newGrid[i][j] === false && livingCount === 3) {
                        newGrid[i][j] = true;
                    }
                }
            }
            return newGrid;
        default:
            return originalGrid;
    }
};

export default GridReducer;
