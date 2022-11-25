import { useFormikContext } from "formik";
import { FC, useEffect } from "react";

import { CreditCardInitialValuesType } from "../../types";

import { CardAutoSubmitProps } from "./types";

const CardAutoSubmit: FC<CardAutoSubmitProps> = ({
    disableAutoSubmit,
    children,
}) => {
    const { dirty, submitForm, isValid, values } =
        useFormikContext<CreditCardInitialValuesType>();

    /*TODO: When cardholder name type lastly form submits on 3 symbol. Need to fix it  */

    useEffect(() => {
        if (
            !disableAutoSubmit &&
            dirty &&
            isValid &&
            values.cardNumber.length === 16
        ) {
            submitForm();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dirty, isValid, values.cardNumber]);

    return <>{children}</>;
};

export default CardAutoSubmit;
