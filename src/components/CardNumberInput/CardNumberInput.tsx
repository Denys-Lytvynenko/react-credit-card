import { Field, useField } from "formik";
import { ChangeEvent, ClipboardEvent, FC, useEffect, useRef } from "react";

import { CardNumberInputType } from "./types";
import { fourDigits, onlyDigits } from "../../utils/patterns";

import styles from "./CardNumberInput.module.scss";

const CardNumberInput: FC<CardNumberInputType> = ({ cardNumberInputLabel }) => {
    const [{ value: value1 }, , { setValue: setValue1 }] =
        useField("cardNumber1");
    const [{ value: value2 }, , { setValue: setValue2 }] =
        useField("cardNumber2");
    const [{ value: value3 }, , { setValue: setValue3 }] =
        useField("cardNumber3");
    const [{ value: value4 }, , { setValue: setValue4 }] =
        useField("cardNumber4");

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

        const cardNumberHandlers = [setValue1, setValue2, setValue3, setValue4];

        // TODO: bug with double paste of one digit number
        for (const index in cardNumberHandlers) {
            if (dividedClipboardData) {
                cardNumberHandlers[index](dividedClipboardData[index]);
            }
        }
    };

    const cardNumberRef = useRef<HTMLDivElement>(null);

    const isCardInput = (cardInput: any) => {
        return (
            cardNumberRef.current &&
            Array.from(cardNumberRef.current.childNodes).includes(cardInput) &&
            cardInput.matches("input")
        );
    };

    useEffect(() => {
        const handleKey = (event: any) => {
            const input = event.target;

            if (!isCardInput(input)) return;

            const prev = input.previousSibling;

            const next = input.nextSibling;

            const key = event.key;

            switch (key) {
                case "ArrowLeft":
                    if (
                        input.selectionStart === 0 &&
                        input.selectionEnd === 0
                    ) {
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
                        input.selectionEnd === 4
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

        document.addEventListener("keydown", handleKey);

        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <fieldset className={styles["form-group"]}>
            <legend>{cardNumberInputLabel}</legend>

            <label htmlFor="cc-1">Card number</label>

            <div
                className={styles["horizontal-input-stack"]}
                ref={cardNumberRef}
            >
                <Field
                    name="cardNumber1"
                    type="text"
                    maxLength={4}
                    aria-label="Credit card first 4 digits"
                    id="cc-1"
                    onPaste={handleOnPaste}
                    required
                    value={value1}
                    onChange={cardNumber1Handler}
                />

                <Field
                    name="cardNumber2"
                    type="text"
                    maxLength={4}
                    aria-label="Credit card second 4 digits"
                    id="cc-1"
                    onPaste={handleOnPaste}
                    required
                    value={value2}
                    onChange={cardNumber2Handler}
                />

                <Field
                    name="cardNumber3"
                    type="text"
                    maxLength={4}
                    aria-label="Credit card third 4 digits"
                    id="cc-1"
                    onPaste={handleOnPaste}
                    required
                    value={value3}
                    onChange={cardNumber3Handler}
                />

                <Field
                    name="cardNumber4"
                    type="text"
                    maxLength={4}
                    aria-label="Credit card last 4 digits"
                    id="cc-1"
                    onPaste={handleOnPaste}
                    required
                    value={value4}
                    onChange={cardNumber4Handler}
                />
            </div>
        </fieldset>
    );
};

export default CardNumberInput;
