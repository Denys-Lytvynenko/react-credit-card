import { useFormikContext } from "formik";
import { FC } from "react";

import { CreditCardInitialValuesType } from "../../types";
import { CardSubmitButtonProps } from "./types";

import "./CardSubmitButton.scss";

const CardSubmitButton: FC<CardSubmitButtonProps> = ({
    disabled,
    className,
    children,
}) => {
    const { dirty, isValid, isSubmitting } =
        useFormikContext<CreditCardInitialValuesType>();

    return (
        <button
            type="submit"
            disabled={disabled || !isValid || !dirty || isSubmitting}
            className={`submit_button ${className ? className : ""}${
                isSubmitting ? "loading" : ""
            }`}
        >
            {isSubmitting && <i className="button_loader" />}

            <span>{children ? children : "Submit"}</span>
        </button>
    );
};
export default CardSubmitButton;
