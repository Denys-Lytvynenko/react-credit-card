import { FC, useContext, useMemo } from "react";
import { CardContext } from "../../../context/CardContext";

import amex from "images/amex.svg";
import discover from "images/discover.svg";
import mastercard from "images/mastercard.svg";
import unionpay from "images/unionpay.svg";
import visa from "images/visa.svg";

const paymentSystemIcons: { [key: string]: string } = {
    amex,
    discover,
    mastercard,
    visa,
    unionpay,
};

const CardLogo: FC = () => {
    const {
        state: { paymentSystem },
    } = useContext(CardContext);

    /**
     * Depending from payment system shows appropriate emblem in the top right corner of the card.
     */
    const paymentSystemIcon = useMemo(() => {
        return paymentSystem ? paymentSystemIcons[paymentSystem] : null;
    }, [paymentSystem]);

    return (
        <>
            {paymentSystemIcon ? (
                <img
                    src={paymentSystemIcon}
                    alt="paymentSystemIcon"
                    className="logo"
                />
            ) : null}
        </>
    );
};

export default CardLogo;
