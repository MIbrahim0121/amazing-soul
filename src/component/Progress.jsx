import { useEffect, useState } from "react";

const StockProgress = () => {
  const startStock = 15;
  const endStock = 5;
  const interval = 300000; // 5 minutes

  const [stockLevel, setStockLevel] = useState(startStock);

  useEffect(() => {
    if (stockLevel > endStock) {
      const timer = setTimeout(() => {
        setStockLevel((prev) => prev - 1);
      }, interval);

      return () => clearTimeout(timer);
    }
  }, [stockLevel]);

  return (
    <div className="progress-container">
      <div className="progress-wrapper">
        <progress id="stock-progress" value={stockLevel} max={startStock}></progress>
        <div id="stock-left">Slots Left: {stockLevel}</div>
      </div>
    </div>
  );
};

export default StockProgress;
