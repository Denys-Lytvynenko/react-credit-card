import { ErrorMessage, ErrorMessageProps } from "formik";
import { FC } from "react";

import "./CardError.scss";

const CardError: FC<ErrorMessageProps> = (props) => (
    <span
        className={`card-error-message ${
            props.className ? props.className : ""
        }`}
    >
        <ErrorMessage {...props} />
    </span>
);

export default CardError;
