import { createContext, FC, useReducer } from "react";

import { reducer } from "./reducer";
import { ContextState } from "./state";
import { CardContextType, ContextType } from "./types";

export const CardContext = createContext({
    state: ContextState,
} as ContextType);

const CardContextProvider: FC<CardContextType> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, ContextState);

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
