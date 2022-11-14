import { Field } from "formik";
import { FC } from "react";

import { CardHolderNameInputType } from "./types";

const CardHolderNameInput: FC<CardHolderNameInputType> = ({
    cardHolderNameInputLabel = "Name",
}) => {
    return (
        <div className="form-group name-group">
            <label htmlFor="cardHolderName">{cardHolderNameInputLabel}</label>

            <Field
                name="cardHolderName"
                type="text"
                id="cardHolderName"
                required
            />
        </div>
    );
};

export default CardHolderNameInput;
