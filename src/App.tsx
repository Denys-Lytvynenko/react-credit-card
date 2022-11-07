import CreditCard from "./components/CreditCard/CreditCard";

import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <CreditCard bankName="VostokBank" paymentSystem="mastercard" />
        </div>
    );
};

export default App;
