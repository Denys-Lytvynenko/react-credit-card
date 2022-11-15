import { Field, useField } from "formik";
import {
    ChangeEvent,
    ClipboardEvent,
    FC,
    useEffect,
    useRef,
    KeyboardEvent,
    KeyboardEventHandler,
} from "react";

import { CardNumberInputType } from "./types";
import { fetchData } from "../../../api/fetchData";
import { fourDigits, onlyDigits } from "../../../utils/patterns";
import { BINCheckResponseTypes } from "../../../api/types";

const CardNumberInput: FC<CardNumberInputType> = ({ cardNumberInputLabel }) => {
    const [{ value: value1 }, , { setValue: setValue1 }] =
        useField("cardNumber1");
    const [{ value: value2 }, , { setValue: setValue2 }] =
        useField("cardNumber2");
    const [{ value: value3 }, , { setValue: setValue3 }] =
        useField("cardNumber3");
    const [{ value: value4 }, , { setValue: setValue4 }] =
        useField("cardNumber4");

    useEffect(() => {
        const controller = new AbortController();

        if (value1.length === 4) {
            fetchData<BINCheckResponseTypes>(
                "https://lookup.binlist.net/",
                value1,
                controller.signal
            )
                .then((data) => console.log("Data", data.scheme))
                .catch((e) => console.error(e));
        }

        return () => controller.abort();
    }, [value1]);

    const cardNumberHandler = (
        event: ChangeEvent<HTMLInputElement>,
        setStateFunction: (value: string) => void
    ) => {
        const value = event.target.value;

        if (value.match(onlyDigits)) setStateFunction(value);
    };

    const cardNumber1Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setValue1);
    const cardNumber2Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setValue2);
    const cardNumber3Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setValue3);
    const cardNumber4Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setValue4);

    const handleOnPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        const clipboardData = event.clipboardData.getData("text/plain");

        if (!clipboardData.match(onlyDigits)) return;

        const dividedClipboardData = clipboardData.match(fourDigits);

        if (dividedClipboardData !== null && dividedClipboardData.length > 1) {
            event.preventDefault();

            const cardNumberHandlers = [
                setValue1,
                setValue2,
                setValue3,
                setValue4,
            ];

            for (let index = 0; index < dividedClipboardData.length; index++) {
                cardNumberHandlers[index](dividedClipboardData[index]);
            }
        }
    };

    const handleKey: KeyboardEventHandler<HTMLInputElement> = (event) => {
        const input = event.currentTarget;

        const prev = input.previousSibling as HTMLInputElement | null;

        const next = input.nextSibling as HTMLInputElement | null;

        const key = event.key;

        switch (key) {
            case "ArrowLeft":
                if (input.selectionStart === 0 && input.selectionEnd === 0) {
                    if (prev) {
                        prev.focus();
                        prev.selectionStart = prev.value.length - 1;
                        prev.selectionEnd = prev.value.length - 1;
                    }
                }
                break;

            case "ArrowRight":
                if (
                    input.selectionStart === input.value.length &&
                    input.selectionEnd === input.value.length
                ) {
                    if (next) {
                        next.focus();
                        next.selectionStart = 0;
                        next.selectionEnd = 0;
                    }
                }
                break;

            default:
                if (
                    input.selectionStart === 4 &&
                    input.selectionEnd === 4 &&
                    key !== "Backspace"
                ) {
                    /**
                     * Focus next field if current is completed
                     */
                    if (next) {
                        next.focus();
                        next.selectionStart = 0;
                        next.selectionEnd = 0;
                    }
                }

                /**
                 * Focus on the previous field on card number deletion
                 */
                if (
                    input.selectionStart === 0 &&
                    input.selectionEnd === 0 &&
                    key === "Backspace"
                ) {
                    if (prev) {
                        prev.focus();
                        prev.selectionStart = prev.value.length;
                        prev.selectionEnd = prev.value.length;
                    }
                }
                break;
        }
    };

    return (
        <fieldset className="form-group">
            <legend>{cardNumberInputLabel}</legend>

            <label htmlFor="cc-1">{cardNumberInputLabel}</label>

            <div className="horizontal-input-stack">
                <Field
                    name="cardNumber1"
                    type="text"
                    id="cc-1"
                    aria-label="Credit card first 4 digits"
                    maxLength={4}
                    required
                    value={value1}
                    onChange={cardNumber1Handler}
                    onPaste={handleOnPaste}
                    onKeyDown={handleKey}
                />

                <Field
                    name="cardNumber2"
                    type="text"
                    id="cc-1"
                    aria-label="Credit card second 4 digits"
                    maxLength={4}
                    required
                    value={value2}
                    onChange={cardNumber2Handler}
                    onPaste={handleOnPaste}
                    onKeyDown={handleKey}
                />

                <Field
                    name="cardNumber3"
                    type="text"
                    id="cc-1"
                    aria-label="Credit card third 4 digits"
                    maxLength={4}
                    required
                    value={value3}
                    onChange={cardNumber3Handler}
                    onPaste={handleOnPaste}
                    onKeyDown={handleKey}
                />

                <Field
                    name="cardNumber4"
                    type="text"
                    id="cc-1"
                    aria-label="Credit card last 4 digits"
                    maxLength={4}
                    required
                    value={value4}
                    onChange={cardNumber4Handler}
                    onPaste={handleOnPaste}
                    onKeyDown={handleKey}
                />
            </div>
        </fieldset>
    );
};

export default CardNumberInput;
