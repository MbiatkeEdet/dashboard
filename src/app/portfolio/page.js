// import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// const data = [
//   { name: "Page A", uv: 4000 },
//   { name: "Page B", uv: 3000 },
//   { name: "Page C", uv: 2000 },
// ];

// export default function MyChart() {
//   return (
//     <LineChart width={500} height={300} data={data}>
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     </LineChart>
//   );
// }

"use client";

import React, { useState, useEffect } from 'react';

const Portfolio = ({ coins }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (coins && coins.length > 0) {
      setIsLoading(false);
    }
  }, [coins]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cryptocurrency Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div key={coin.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{coin.name}</h2>
            <p className="text-gray-600">${coin.current_price}</p>
            <p className="text-gray-600">{coin.symbol.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;