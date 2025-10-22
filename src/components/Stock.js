import React from "react";

function Stock({ stock, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(stock)}>
      <div className="card-body">
        <h5>{stock.name}</h5>
        <p>{stock.ticker}</p>
        <p>${stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;
