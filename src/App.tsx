import { FormikHelpers } from "formik";
import { FC } from "react";

import { CreditCardInitialValuesType } from "./components/CreditCard/types";

import CreditCard from "./components/CreditCard/CreditCard";

import "./App.scss";

const App: FC = () => {
    /**
     * onSubmit handler function
     */
    const onSubmitForm = (
        values: CreditCardInitialValuesType,
        helpers: FormikHelpers<CreditCardInitialValuesType>
    ) => {
        console.log("Form values", values);
        console.log("Form helpers", helpers);

        /**
         * Specify what you need to do with form data.
         * As example simple alert card values.
         */
        alert(`
        Card form submitted with values:

        Card number: ${values.cardNumber}
        Cardholder name: ${values.cardHolderName}
        Expiration: ${values.expirationMonth}/${values.expirationYear}
        CCV code: ${values.ccvCode}`);

        setTimeout(() => helpers.resetForm(), 5000);
    };

    return (
        <div className="App">
            <CreditCard
                onSubmit={onSubmitForm}
                bankName="BankName"
                expirationDateLimit={10}
                labelColor="black"
            />
        </div>
    );
};

export default App;
