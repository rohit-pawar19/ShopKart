import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const initialState = { theme: 'light' };

function ThemeReducer(state, action) {
    switch (action.type) {
        case "Toggle_theme":
            return { theme: state.theme == 'light' ? 'dark' : 'light' };
        default:
            return state
            
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider> 
    );
}

export default ThemeReducer;