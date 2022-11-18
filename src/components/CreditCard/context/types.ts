import { ReactNode } from "react";

import { ACTION_TYPES } from "./reducer";

export type CardContextType = {
    children?: ReactNode;
};

export type ContextStateType = {
    paymentSystem?: string;
};

export type ContextType = {
    state: ContextStateType;
    dispatch: <T>({
        type,
        payload,
    }: {
        type: ACTION_TYPES;
        payload?: T | T[];
    }) => void;
};

export type ActionsType = {
    type: ACTION_TYPES;
    payload?: any;
};
