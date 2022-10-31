import CreditCard from "./components/CreditCard/CreditCard";

import "./App.scss";
const App = () => {
    return (
        <div className="App">
            <CreditCard bankName="monobank" paymentSystem="visa" />
        </div>
    );
};

export default App;
