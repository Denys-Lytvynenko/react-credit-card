import { StandardLonghandProperties } from "csstype";

export type CreditCardProps = {
    /**
     * The name of the bank that is
     */
    bankName: string;
    /**
     * Inner ref to get formik values and helpers from the outside credit card component
     */
    innerRef: React.RefObject<any> | null;
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

    frontCardAccentColor?: StandardLonghandProperties["color"];
    isFrontCardSolidColor?: boolean;
    frontCardCustomBG?: string;
    backCardAccentColor?: StandardLonghandProperties["color"];
    isBackCardSolidColor?: boolean;
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
