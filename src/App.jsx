import { use, useState } from "react";
import "./App.css";
import Inputbox from "./components/Inputbox";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
function App() {
  const [amount, setamount] = useState(1);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);
  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <h1 className="mb-5 text-4xl font-sans font-bold">
          Currency Convertor
        </h1>
        <div
          className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
          style={{ backgroundColor: "burlywood" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(currency) => setfrom(currency)}
                selectcurrency={from}
                onamountchange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-blue-600 text-white px-4 py-2 text-lg"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={to}
                amountdisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
