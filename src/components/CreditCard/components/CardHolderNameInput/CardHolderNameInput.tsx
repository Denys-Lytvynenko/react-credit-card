import { useField } from "formik";
import { ChangeEvent, FC } from "react";

import { onlyLetters } from "../../utils/patterns";
import { CardHolderNameInputType } from "./types";

import CardError from "../CardError/CardError";
import CardField from "../CardField/CardField";

import "./CardHolderNameInput.scss";

const CardHolderNameInput: FC<CardHolderNameInputType> = ({
    cardHolderNameInputLabel = "Cardholder name",
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

            <CardField
                name="cardHolderName"
                type="text"
                id="cardHolderName"
                maxLength={50}
                required
                value={value}
                onChange={onChange}
            />

            <CardError name="cardHolderName" />
        </div>
    );
};

export default CardHolderNameInput;
