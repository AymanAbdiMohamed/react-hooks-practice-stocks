import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  // Buy and sell logic
  function handleBuyStock(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  // Sort and filter logic
  const sortedStocks = [...stocks]
    .filter((stock) => filterType === "All" || stock.type === filterType)
    .sort((a, b) => {
      if (sortType === "Alphabetically") return a.ticker.localeCompare(b.ticker);
      if (sortType === "Price") return a.price - b.price;
      return 0;
    });

  return (
    <div>
      <SearchBar
        sortType={sortType}
        setSortType={setSortType}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <StockContainer stocks={sortedStocks} onBuyStock={handleBuyStock} />
      <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
    </div>
  );
}

export default App;
