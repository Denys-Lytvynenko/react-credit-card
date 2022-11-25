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
