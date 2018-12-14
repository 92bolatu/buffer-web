const initState = {
    Type: 'light',
};

const themeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME_TYPE':
            let Type = state.Type === 'dark' ? 'light' : 'dark';
            return {...state, Type};
        default:
            return state;
    }
};
export default themeReducer;