import { useField, Field } from "formik";
import { FC, ChangeEvent, ClipboardEvent } from "react";

import { onlyDigits, threeDigits } from "../../utils/patterns";
import { CcvCodeInputType } from "./types";

const CcvCodeInput: FC<CcvCodeInputType> = ({ ccvCodeInputLabel = "ccv" }) => {
    const [{ value }, , { setValue }] = useField("ccvCode");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value.match(onlyDigits)) setValue(value);
    };

    const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        const clipboardData = event.clipboardData.getData("text/plain");

        if (!clipboardData.match(onlyDigits)) return;

        const dividedClipboardData = clipboardData.match(threeDigits);

        if (dividedClipboardData) {
            setValue(dividedClipboardData[0]);
        }
    };

    return (
        <div className="form-group ccv-group">
            <label htmlFor="ccv">{ccvCodeInputLabel}</label>

            <Field
                name="ccvCode"
                type="text"
                id="ccv"
                className="ccv-input"
                maxLength={3}
                required
                value={value}
                onChange={onChange}
                onPaste={onPaste}
            />
        </div>
    );
};

export default CcvCodeInput;
