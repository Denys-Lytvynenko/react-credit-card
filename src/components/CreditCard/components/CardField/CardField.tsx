import { Field, FieldAttributes, FieldConfig, useField } from "formik";
import { FC } from "react";

import "./CardField.scss";

const CardField: FC<FieldAttributes<FieldConfig>> = (props) => {
    const { className } = props;

    const [, { touched, error }] = useField<string>(props.name);

    return (
        <Field
            {...props}
            className={`${touched && error ? "card-input-error" : ""} ${
                className ? className : ""
            }`}
        />
    );
};

export default CardField;
