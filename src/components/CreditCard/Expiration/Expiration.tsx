import { Field } from "formik";
import { FC, useMemo } from "react";

import { ExpirationType } from "./types";

const Expiration: FC<ExpirationType> = ({ expirationDateLimit }) => {
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

    return (
        <fieldset className="form-group">
            <legend>Expiration</legend>

            <label htmlFor="expiration-month">Expiration</label>

            <div className="horizontal-input-stack">
                <Field
                    name="expirationMonth"
                    as="select"
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
                </Field>

                <Field
                    name="expirationYear"
                    as="select"
                    id="expiration-year"
                    aria-label="Expiration year"
                    required
                >
                    {yearsOptions}
                </Field>
            </div>
        </fieldset>
    );
};

export default Expiration;
