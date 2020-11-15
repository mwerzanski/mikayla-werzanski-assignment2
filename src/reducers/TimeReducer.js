const TimeReducer=(state=2000, action) => {
    switch (action.type) {
        case 'SET_TIME':
            console.log(action.frequency)
            return action.frequency
        default:
            return state
    }
}

export default TimeReducer