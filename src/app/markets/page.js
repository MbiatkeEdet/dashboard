"use client";
import { useEffect, useState } from "react";
import { fetchCryptoData } from "@/utils/fetchCrypto";

const CryptoTable = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCryptoData();
      setCrypto(data);
    };

    getData();

    // Auto-refresh every 10 seconds
    const interval = setInterval(getData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">🔥 Crypto Market</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Coin</th>
            <th className="p-2">Price</th>
            <th className="p-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((coin) => (
            <tr key={coin.id} className="border-b border-gray-700">
              <td className="p-2 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td className="p-2">${coin.current_price.toLocaleString()}</td>
              <td
                className={`p-2 ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
