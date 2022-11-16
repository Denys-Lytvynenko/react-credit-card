import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";

import { CreditCardInitialValuesType, CreditCardProps } from "../types";

import CardBackground from "../CardBackground/CardBackground";
import CardHolderNameInput from "../CardHolderNameInput/CardHolderNameInput";
import CardLogo from "../CardLogo/CardLogo";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import CcvCodeInput from "../CcvCodeInput/CcvCodeInput";
import Expiration from "../Expiration/Expiration";

const creditCardInitialValues: CreditCardInitialValuesType = {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    cardHolderName: "",
    expirationMonth: (new Date().getMonth() + 1).toString(),
    expirationYear: new Date().getFullYear().toString(),
    ccvCode: "",
};

const CreditCardForm: FC<CreditCardProps> = ({
    bankName,
    cardNumberInputLabel = "Card number",
    expirationDateLimit = 5,
    labelColor = "white",
    innerRef = null,
}) => {
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

                        <CardLogo />
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

export default CreditCardForm;
