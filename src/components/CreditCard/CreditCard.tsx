import { FC, useMemo } from "react";

import { CreditCardProps } from "./types";

import mastercard from "images/mastercard.svg";
import visa from "images/visa.svg";

const CreditCard: FC<CreditCardProps> = ({
    bankName,
    paymentSystem,
    cardNumberLabel = "Card number",
}) => {
    const paymentSystemIcon = useMemo(
        () => (paymentSystem === "visa" ? visa : mastercard),
        [paymentSystem]
    );

    return (
        <form className="credit-card">
            <div className="front">
                <div className="card-data-row">
                    <div className="brand-name">{bankName}</div>

                    <img
                        src={paymentSystemIcon}
                        alt="paymentSystemIcon"
                        className="logo"
                    />
                </div>

                <fieldset className="form-group">
                    <legend>{cardNumberLabel}</legend>

                    <label htmlFor="cc-1">Card number</label>

                    <div className="cc-inputs">
                        <input
                            type="tel"
                            max={4}
                            aria-label="Credit card first 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            pattern="[0-9]{4}"
                        />

                        <input
                            type="tel"
                            max={4}
                            aria-label="Credit card second 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            pattern="[0-9]{4}"
                        />

                        <input
                            type="tel"
                            max={4}
                            aria-label="Credit card third 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            pattern="[0-9]{4}"
                        />

                        <input
                            type="tel"
                            max={4}
                            aria-label="Credit card last 4 digits"
                            name="cc-1"
                            id="cc-1"
                            required
                            pattern="[0-9]{4}"
                        />
                    </div>
                </fieldset>

                <div className="input-row">
                    <div className="form-group name-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <fieldset className="form-group">
                        <legend>Expiration</legend>
                        <label htmlFor="expiration-month">Expiration</label>
                        <div className="horizontal-input-stack">
                            <select
                                id="expiration-month"
                                aria-label="Expiration Month"
                                required
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
                            >
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="back">
                <div className="stripe"></div>
                <div className="form-group cvs-group">
                    <label htmlFor="cvc">CVC</label>
                    <input type="tel" maxLength={3} id="cvc" required />
                </div>
            </div>
        </form>
    );
};

export default CreditCard;
