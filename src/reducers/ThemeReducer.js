import {makeTheme} from "../AppTheme";

const initState = {
    config: {
        type: 'light',
        primary: null,
        secondary: null,
    },
    theme: makeTheme()
};

const themeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_THEME_PALETTE_TYPE':
            let config = {...state.config, type: action.value};
            return {config, theme: makeTheme(config)};
        default:
            return state;
    }
};
export default themeReducer;