import { Field, useField } from "formik";
import { ChangeEvent, FC } from "react";

import { onlyLetters } from "../../../utils/patterns";
import { CardHolderNameInputType } from "./types";

const CardHolderNameInput: FC<CardHolderNameInputType> = ({
    cardHolderNameInputLabel = "Name",
}) => {
    const [{ value }, , { setValue }] = useField("cardHolderName");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;

        if (value.match(onlyLetters)) setValue(value.toUpperCase());
    };

    return (
        <div className="form-group name-group">
            <label htmlFor="cardHolderName">{cardHolderNameInputLabel}</label>

            <Field
                name="cardHolderName"
                type="text"
                id="cardHolderName"
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CardHolderNameInput;
