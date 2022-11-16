import { ActionsType, ContextStateType } from "./types";

export enum ACTION_TYPES {
    "CHANGE_PAYMENT_SYSTEM",
}

export const reducer = (
    state: ContextStateType,
    action: ActionsType
): ContextStateType => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_PAYMENT_SYSTEM:
            return { ...state, paymentSystem: action.payload };

        default:
            return state;
    }
};
