import axios from "axios";
import React, { useEffect, useState } from "react";

import Coins from "./components/Coins";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}

export default App;
