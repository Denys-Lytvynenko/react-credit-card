import { FC } from "react";

import { CreditCardProps } from "./types";

import CardContextProvider from "../../context/CardContext";
import CreditCardForm from "./CreditCardForm/CreditCardForm";

import "./CreditCard.scss";

const CreditCard: FC<CreditCardProps> = (props) => (
    <CardContextProvider>
        <CreditCardForm {...props} />
    </CardContextProvider>
);

export default CreditCard;
