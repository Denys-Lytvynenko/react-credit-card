import { FormikHelpers } from "formik";
import { FC } from "react";

import { CreditCardInitialValuesType } from "./components/CreditCard/types";

import CreditCard from "./components/CreditCard/CreditCard";

import "./App.scss";

const App: FC = () => {
    const submitForm = (
        values: CreditCardInitialValuesType,
        helpers: FormikHelpers<CreditCardInitialValuesType>
    ) => {
        console.log("Form values", values);
        console.log("Form helpers", helpers);

        alert(`
        Card form submitted with values:

        Card number: ${values.cardNumber}
        Cardholder name: ${values.cardHolderName}
        Expiration: ${values.expirationMonth}/${values.expirationYear}
        CCV code: ${values.ccvCode}`);
    };

    return (
        <div className="App">
            <CreditCard
                onSubmit={submitForm}
                bankName="BankName"
                expirationDateLimit={10}
                labelColor="black"
            />
        </div>
    );
};

export default App;
