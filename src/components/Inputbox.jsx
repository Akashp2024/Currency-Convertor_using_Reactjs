import React from "react";
import { useId } from "react";

function Inputbox({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountdisable = false,
  currencydisable = false,
  className = "",
}) {
  const amountinputid = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountinputid}
          className="text-black/40 mb-2 inline-block"
          style={{ fontSize: "20px" }}
        >
          {label}
        </label>
        <input
          style={{ fontSize: "20px" }}
          id={amountinputid}
          className="outline-none w-full py-1.5 bg-gray-100 rounded-lg"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onamountchange && onamountchange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full" style={{ fontSize: "20px" }}>
          Currency Type
        </p>
        <select
          style={{ fontSize: "20px" }}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyoptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
