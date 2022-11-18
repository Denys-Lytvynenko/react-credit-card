import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { FC } from "react";

import { CreditCardInitialValuesType, CreditCardProps } from "../../types";
import { spaces } from "../../utils/patterns";

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

const validateForm = (
    values: CreditCardInitialValuesType
): FormikErrors<CreditCardInitialValuesType> | undefined => {
    const {
        cardNumber1,
        cardNumber2,
        cardNumber3,
        cardNumber4,
        cardHolderName,
        ccvCode,
    } = values;

    let errors: FormikErrors<CreditCardInitialValuesType> = {};

    if (
        cardNumber1.length < 4 ||
        cardNumber2.length < 4 ||
        cardNumber3.length < 4 ||
        cardNumber4.length < 4
    ) {
        errors.cardNumber1 = "Card number must contain 16 digits";
        errors.cardNumber2 = "Card number must contain 16 digits";
        errors.cardNumber3 = "Card number must contain 16 digits";
        errors.cardNumber4 = "Card number must contain 16 digits";
    }

    if (cardHolderName.replaceAll(spaces, "").trim().length < 3) {
        errors.cardHolderName =
            "Cardholder name must contain at least 3 characters";
    }

    if (cardHolderName.replaceAll(spaces, "").trim().length > 50) {
        errors.cardHolderName = "Cardholder name is too long";
    }

    if (ccvCode.length < 3) {
        errors.ccvCode = "Enter CCV code";
    }

    return errors;
};

const CreditCardForm: FC<CreditCardProps> = ({
    bankName,
    cardNumberInputLabel,
    cardHolderNameInputLabel,
    expirationDateLimitLabel,
    expirationDateLimit,
    ccvCodeInputLabel,
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
            validate={validateForm}
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
                        <CardHolderNameInput
                            cardHolderNameInputLabel={cardHolderNameInputLabel}
                        />

                        <Expiration
                            expirationDateLimitLabel={expirationDateLimitLabel}
                            expirationDateLimit={expirationDateLimit}
                        />
                    </div>
                </div>

                <div className="back">
                    <CardBackground solid accentColor="gray" />

                    <div className="stripe" />

                    <CcvCodeInput ccvCodeInputLabel={ccvCodeInputLabel} />
                </div>
            </Form>
        </Formik>
    );
};

export default CreditCardForm;
