import { StandardLonghandProperties } from "csstype";
import { FormikHelpers } from "formik";

export type CreditCardProps = {
    /**
     * The name of the bank that is
     */
    bankName: string;
    /**
     * Specify what to do on submit event.
     * @param value credit card form values;
     * @param helpers formik helpers object with list of helper functions.
     */
    onSubmit: (
        values: CreditCardInitialValuesType,
        helpers: FormikHelpers<CreditCardInitialValuesType>
    ) => void;
    /**
     * Disable auto submit.
     * Default value is - "false"
     */
    disableAutoSubmit?: boolean;
    /**
     * Inner ref to get formik values and helpers from the outside credit card component
     */
    innerRef?: React.RefObject<any> | null;
    /**
     * Card number label.
     * Default value is - "Card number"
     */
    cardNumberInputLabel?: string;
    /**
     * Cardholder name input label.
     * Default value is - "Name"
     */
    cardHolderNameInputLabel?: string;
    /**
     * Expiration date limit label.
     * Default value is - "Expiration"
     */
    expirationDateLimitLabel?: string;
    /**
     * CCV code input label.
     * Default value is - "CCV"
     */
    ccvCodeInputLabel?: string;
    /**
     * Number of years from current year to the expiration year.
     * (Credit cards expire every three to five years, depending on the issuer.).
     * Default value is - 3 years.
     */
    expirationDateLimit?: number;
    /**
     * Set label color.
     * Default value is - "white"
     */
    labelColor?: StandardLonghandProperties["color"];
    /**
     * Front card accent color.
     * Default value is - "gold"
     */
    frontCardAccentColor?: StandardLonghandProperties["color"];
    /**
     * Makes front card solid background color.
     * As background color use "frontCardAccentColor".
     * Default value is - "false".
     */
    isFrontCardSolidColor?: boolean;
    /**
     * You can set background image of front card manually by passing url string to the image.
     * Default value is - undefined.
     */
    frontCardCustomBG?: string;
    /**
     * Back card accent color.
     * Default value is - "gold"
     */
    backCardAccentColor?: StandardLonghandProperties["color"];
    /**
     * Makes back card solid background color.
     * As background color use "backCardAccentColor".
     * Default value is - "true".
     */
    isBackCardSolidColor?: boolean;
    /**
     * You can set background image of back card manually by passing url string to the image.
     * Default value is - undefined.
     */
    backCardCustomBG?: string;
};

export type CreditCardInitialValuesType = {
    cardNumber1: string;
    cardNumber2: string;
    cardNumber3: string;
    cardNumber4: string;
    cardNumber: string;
    cardHolderName: string;
    expirationMonth: string;
    expirationYear: string;
    ccvCode: string;
};
