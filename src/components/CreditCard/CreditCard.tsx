import { FC } from "react";

import { CreditCardProps } from "./types";

import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import CardContextProvider from "./context/CardContext";

import "./CreditCard.scss";

const CreditCard: FC<CreditCardProps> = (props) => (
    <CardContextProvider>
        <CreditCardForm {...props} />
    </CardContextProvider>
);

export default CreditCard;
