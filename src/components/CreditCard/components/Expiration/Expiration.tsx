import { Field, useField } from "formik";
import { FC, useMemo } from "react";

import { keyGenerator } from "../../utils/helpers";
import { ExpirationType } from "./types";

const Expiration: FC<ExpirationType> = ({
    expirationDateLimitLabel = "Expiration",
    expirationDateLimit = 5,
}) => {
    const [{ value }] = useField<HTMLSelectElement>("expirationYear");

    /**
     * Calculates options for the expiration year select field starting from current year and to the expiration date limit.
     */
    const yearsOptions = useMemo(() => {
        let options: JSX.Element[] = [];

        const currentYear = new Date().getFullYear();

        for (let i = currentYear; i < currentYear + expirationDateLimit; i++) {
            options.push(
                <option value={i} key={keyGenerator(i)}>
                    {i}
                </option>
            );
        }

        return options;
    }, [expirationDateLimit]);

    /**
     * Calculates options for the expiration month select field depending from selected year.
     * If selected year equal to current year month options start from current month and to the end of current year.
     * If selected year different from current year month options start from 01 to 12.
     */
    const monthOptions = useMemo(() => {
        let options: JSX.Element[] = [];

        const optionCreator = (i: number): void => {
            let optionValue;

            if (i.toString().length < 2) {
                optionValue = "0" + i;
            } else {
                optionValue = i;
            }

            options.push(
                <option value={optionValue} key={keyGenerator(optionValue)}>
                    {optionValue}
                </option>
            );
        };

        if (value.toString() === new Date().getFullYear().toString()) {
            for (let i = new Date().getMonth() + 1; i <= 12; i++) {
                optionCreator(i);
            }
        } else {
            for (let i = 1; i <= 12; i++) {
                optionCreator(i);
            }
        }

        return options;
    }, [value]);

    return (
        <fieldset className="form-group">
            <legend>{expirationDateLimitLabel}</legend>

            <label htmlFor="expiration-month">{expirationDateLimitLabel}</label>

            <div className="horizontal-input-stack">
                <Field
                    name="expirationMonth"
                    as="select"
                    id="expiration-month"
                    aria-label="Expiration Month"
                    required
                >
                    {monthOptions}
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
