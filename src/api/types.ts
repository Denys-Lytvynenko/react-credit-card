export type BINCheckResponseTypes = {
    number: {
        length: number | null;
        luhn: boolean | null;
    } | null;
    scheme: "visa" | "mastercard" | null;
    type: string | null;
    brand: string | null;
    prepaid: boolean | null;
    country: {
        numeric: string | null;
        alpha2: string | null;
        name: string | null;
        emoji: string | null;
        currency: string | null;
        latitude: number | null;
        longitude: number | null;
    } | null;
    bank: {
        name: string | null;
        url: string | null;
        phone: string | null;
        city: string | null;
    } | null;
};
