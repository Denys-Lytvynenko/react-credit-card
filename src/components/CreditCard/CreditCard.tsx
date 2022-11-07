import { FC, FormEvent, useEffect, useMemo, useRef } from "react";

import { CreditCardProps } from "./types";

import mastercard from "images/mastercard.svg";
import visa from "images/visa.svg";

import styles from "./CreditCard.module.scss";

const CreditCard: FC<CreditCardProps> = ({
    bankName,
    paymentSystem,
    cardNumberLabel = "Card number",
    expirationDateLimit = 3,
}) => {
    /**
     * Depending from payment system shows appropriate emblem in the top right corner of the card.
     */
    const paymentSystemIcon = useMemo(
        () => (paymentSystem === "visa" ? visa : mastercard),
        [paymentSystem]
    );

    /**
     * Calculates options for the expiration year select field starting from current year and to the expiration date limit.
     */
    const yearsOptions = useMemo(() => {
        let options: JSX.Element[] = [];

        const currentYear = new Date().getFullYear();

        for (let i = currentYear; i < currentYear + expirationDateLimit; i++) {
            options.push(
                <option value={i} key={i}>
                    {i}
                </option>
            );
        }

        return options;
    }, [expirationDateLimit]);

    const cardNumber1Ref = useRef<HTMLInputElement>(null);
    const cardNumber2Ref = useRef<HTMLInputElement>(null);
    const cardNumber3Ref = useRef<HTMLInputElement>(null);
    const cardNumber4Ref = useRef<HTMLInputElement>(null);

    const nameInputRef = useRef<HTMLInputElement>(null);

    const expirationMonthRef = useRef<HTMLSelectElement>(null);

    const expirationYearRef = useRef<HTMLSelectElement>(null);

    const cvcRef = useRef<HTMLInputElement>(null);

    const isClosestParent = (input: any) => {
        const parent = input?.closest("[data-card-number]");

        return input.matches("input") && parent !== null;
    };

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            const input = event.target;

            console.log("input target", {
                selectionStart: input.selectionStart,
                selectionEnd: input.selectionEnd,
            });
            if (!isClosestParent(input)) return;

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
                        if (next) {
                            next.focus();
                        }
                    }
                    if (
                        input.selectionStart === 0 &&
                        input.selectionEnd === 0 &&
                        key === "Backspace"
                    ) {
                        if (prev) prev.focus();
                        prev.selectionStart = prev.value.length;
                        prev.selectionEnd = prev.value.length;
                    }
                    break;
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    const submitForm = (event: FormEvent) => {
        event.preventDefault();
        const cardNumber = `${cardNumber1Ref.current?.value}${cardNumber2Ref.current?.value}${cardNumber3Ref.current?.value}${cardNumber4Ref.current?.value}`;

        alert(`Credit card data is:
            Card number: ${cardNumber},
            Card holder name: ${nameInputRef.current?.value.toUpperCase()},
            Expiration date: ${expirationMonthRef.current?.value} ${
            expirationYearRef.current?.value
        }
            CVC: ${cvcRef.current?.value}
        `);
    };

    return (
        <form className={styles["credit-card"]} onSubmit={submitForm}>
            <div className={styles.front}>
                <div className={styles["card-data-row"]}>
                    <div className={styles["brand-name"]}>{bankName}</div>

                    <img
                        src={paymentSystemIcon}
                        alt="paymentSystemIcon"
                        className={styles.logo}
                    />
                </div>

                <fieldset className={styles["form-group"]}>
                    <legend>{cardNumberLabel}</legend>

                    <label htmlFor="cc-1">Card number</label>

                    <div
                        className={styles["horizontal-input-stack"]}
                        data-card-number
                    >
                        <input
                            type="text"
                            maxLength={4}
                            aria-label="Credit card first 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            ref={cardNumber1Ref}
                        />

                        <input
                            type="text"
                            maxLength={4}
                            aria-label="Credit card second 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            ref={cardNumber2Ref}
                        />

                        <input
                            type="text"
                            maxLength={4}
                            aria-label="Credit card third 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            ref={cardNumber3Ref}
                        />

                        <input
                            type="text"
                            maxLength={4}
                            aria-label="Credit card last 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            ref={cardNumber4Ref}
                        />
                    </div>
                </fieldset>

                <div className={styles["input-row"]}>
                    <div
                        className={`${styles["form-group"]} ${styles["name-group"]} `}
                    >
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            id="name"
                            required
                            ref={nameInputRef}
                        />
                    </div>

                    <fieldset className={`${styles["form-group"]}`}>
                        <legend>Expiration</legend>

                        <label htmlFor="expiration-month">Expiration</label>

                        <div className={styles["horizontal-input-stack"]}>
                            <select
                                id="expiration-month"
                                aria-label="Expiration Month"
                                required
                                ref={expirationMonthRef}
                            >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <select
                                id="expiration-year"
                                aria-label="Expiration year"
                                required
                                ref={expirationYearRef}
                            >
                                {yearsOptions}
                            </select>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div className={styles["back"]}>
                <div className={styles["stripe"]} />

                <div
                    className={`${styles["form-group"]} ${styles["cvc-group"]}`}
                >
                    <label htmlFor="cvc">CVC</label>

                    <input
                        type="tel"
                        maxLength={3}
                        id="cvc"
                        className={styles["cvc-input"]}
                        required
                        ref={cvcRef}
                    />
                </div>
            </div>

            <button type="submit">submit</button>
        </form>
    );
};

export default CreditCard;
