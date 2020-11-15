const HeatReducer = (state = [], action) => {
    let newMap;
    let h;
    let w;
    let random_bool;
    switch (action.type) {
        case 'CREATE_HEATMAP':
            h = parseInt(action.height, 10);
            w = parseInt(action.width, 10);
            newMap = new Array(h).fill(0);
            newMap = newMap.map(row => new Array(w).fill(0));
            random_bool;
            return newMap;
        case 'UPDATE_HEATMAP':
            console.log(action.grid);
            for (let i = 0; i < action.grid.length; i++) {
                for (let j = 0; j < action.grid[i].length; j++) {
                    if (action.grid[i][j] === true) {
                        console.log('true');
                        state[i][j] = 0;
                    } else {
                        state[i][j]++;
                    }
                }
            }
            return state;
        default:
            return state;
    }
};

export default HeatReducer;
