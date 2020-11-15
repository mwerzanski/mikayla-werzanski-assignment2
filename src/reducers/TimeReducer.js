const TimeReducer = (state = 2000, action) => {
    switch (action.type) {
        case 'SET_TIME':
            return action.frequency;
        default:
            return state;
    }
};

export default TimeReducer;
