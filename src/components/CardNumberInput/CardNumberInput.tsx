import { Field } from "formik";
import {
    ChangeEvent,
    ClipboardEvent,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";

import { CardNumberInputType } from "./types";

import styles from "./CardNumberInput.module.scss";

const CardNumberInput: FC<CardNumberInputType> = ({ cardNumberInputLabel }) => {
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

    const [cardNumber1, setCardNumber1] = useState<string>("");
    const [cardNumber2, setCardNumber2] = useState<string>("");
    const [cardNumber3, setCardNumber3] = useState<string>("");
    const [cardNumber4, setCardNumber4] = useState<string>("");

    const cardNumberHandler = (
        event: ChangeEvent<HTMLInputElement>,
        setStateFunction: Dispatch<SetStateAction<string>>
    ) => {
        const value = event.target.value;
        if (value.match(/^[0-9]*$/)) setStateFunction(value);
    };

    const cardNumber1Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setCardNumber1);
    const cardNumber2Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setCardNumber2);
    const cardNumber3Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setCardNumber3);
    const cardNumber4Handler = (event: ChangeEvent<HTMLInputElement>) =>
        cardNumberHandler(event, setCardNumber4);

    const handleOnPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        console.log("clipboardData", event.clipboardData.getData("text/plain"));

        const clipboardData = event.clipboardData.getData("text/plain");

        if (!clipboardData.match(/^[0-9]*$/)) return;

        const dividedClipboardData = clipboardData.match(/.{1,4}/g);

        const cardNumberHandlers = [
            setCardNumber1,
            setCardNumber2,
            setCardNumber3,
            setCardNumber4,
        ];

        for (const handler in cardNumberHandlers) {
            if (dividedClipboardData) {
                cardNumberHandlers[handler](dividedClipboardData[handler]);
            }
        }
    };

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
                    value={cardNumber1}
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
                    value={cardNumber2}
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
                    value={cardNumber3}
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
                    value={cardNumber4}
                    onChange={cardNumber4Handler}
                />
            </div>
        </fieldset>
    );
};

export default CardNumberInput;
