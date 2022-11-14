import { Form, Formik, FormikHelpers } from "formik";
import { FC, useMemo } from "react";

import { CreditCardInitialValuesType, CreditCardProps } from "./types";

import CardBackground from "./CardBackground/CardBackground";
import CardHolderNameInput from "./CardHolderNameInput/CardHolderNameInput";
import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CcvCodeInput from "./CcvCodeInput/CcvCodeInput";
import Expiration from "./Expiration/Expiration";

import mastercard from "images/mastercard.svg";
import prostir from "images/prostir.svg";
import visa from "images/visa.svg";

import "./CreditCard.scss";

const creditCardInitialValues: CreditCardInitialValuesType = {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    cardHolderName: "",
    expirationMonth: "01",
    expirationYear: new Date().getFullYear().toString(),
    ccvCode: "",
};

const CreditCard: FC<CreditCardProps> = ({
    bankName,
    paymentSystem,
    cardNumberInputLabel = "Card number",
    expirationDateLimit = 5,
    labelColor = "white",
    innerRef = null,
}) => {
    /**
     * Depending from payment system shows appropriate emblem in the top right corner of the card.
     */
    const paymentSystemIcon = useMemo(() => {
        switch (paymentSystem) {
            case "visa":
                return visa;
            case "mastercard":
                return mastercard;
            case "prostir":
                return prostir;
            default:
                break;
        }
    }, [paymentSystem]);

    const submitForm = (
        values: CreditCardInitialValuesType,
        helpers: FormikHelpers<CreditCardInitialValuesType>
    ) => {
        console.log("Form values", values);
        console.log("Form helpers", helpers);
    };

    return (
        <Formik
            innerRef={innerRef}
            initialValues={creditCardInitialValues}
            onSubmit={submitForm}
        >
            <Form className="credit-card" style={{ color: labelColor }}>
                <div className="front">
                    <CardBackground accentColor="gray" />

                    <div className="card-data-row">
                        <div className="brand-name">{bankName}</div>

                        <img
                            src={paymentSystemIcon}
                            alt="paymentSystemIcon"
                            className="logo"
                        />
                    </div>

                    <CardNumberInput
                        cardNumberInputLabel={cardNumberInputLabel}
                    />

                    <div className="input-row">
                        <CardHolderNameInput />

                        <Expiration expirationDateLimit={expirationDateLimit} />
                    </div>
                </div>

                <div className="back">
                    <CardBackground solid accentColor="gray" />

                    <div className="stripe" />

                    <CcvCodeInput />
                </div>
            </Form>
        </Formik>
    );
};

export default CreditCard;
