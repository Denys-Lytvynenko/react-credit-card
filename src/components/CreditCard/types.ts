export type CreditCardProps = {
    /**
     * The name of the bank that is
     */
    bankName: string;
    /**
     * Payment system
     */
    paymentSystem: "visa" | "mastercard" | "prostir";
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
     * Number of years from current year to the expiration year.
     * (Credit cards expire every three to five years, depending on the issuer.).
     * Default value is - 3 years.
     */
    expirationDateLimit?: number;
};

export type CreditCardInitialValuesType = {
    cardNumber1: string;
    cardNumber2: string;
    cardNumber3: string;
    cardNumber4: string;
    cardHolderName: string;
    expirationMonth: string;
    expirationYear: string;
    ccvCode: string;
};
