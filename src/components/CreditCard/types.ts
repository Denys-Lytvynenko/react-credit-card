export type CreditCardProps = {
    /**
     * The name of the bank that is
     */
    bankName: string;
    /**
     * Payment system
     */
    paymentSystem: "visa" | "mastercard";
    /**
     * Card number label.
     * Default value is - "Card number"
     */
    cardNumberLabel?: string;
    /**
     * Number of years from current year to the expiration year.
     * (Credit cards expire every three to five years, depending on the issuer.).
     * Default value is - 3 years.
     */
    expirationDateLimit?: number;
};
