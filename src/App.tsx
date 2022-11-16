import { FormikProps } from "formik";
import { useRef } from "react";

import { CreditCardInitialValuesType } from "./components/CreditCard/types";

import CreditCard from "./components/CreditCard/CreditCard";

import "./App.scss";

const App = () => {
    const formikRef = useRef<FormikProps<CreditCardInitialValuesType>>(null);

    const submitForm = () => formikRef.current?.submitForm();

    return (
        <div className="App">
            <CreditCard
                innerRef={formikRef}
                bankName="VostokBank"
                expirationDateLimit={25}
                labelColor="black"
            />

            <button
                type="submit"
                onClick={submitForm}
                style={{ marginTop: "100px" }}
            >
                submit
            </button>
        </div>
    );
};

export default App;
