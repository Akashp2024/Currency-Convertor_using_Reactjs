import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
    const [data, setdata] = useState({});
    useEffect(() => {fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res)=> res.json()).then((res)=>setdata(res[currency]))
    console.log(data);
    },[currency]);
    return data; 
}

export default useCurrencyinfo;