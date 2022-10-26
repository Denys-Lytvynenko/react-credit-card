import CreditCard from "./components/CreditCard/CreditCard";

const App = () => {
    return (
        <div className="App">
            <CreditCard bankName="Mono Bank" paymentSystem="visa" />
        </div>
    );
};

export default App;
