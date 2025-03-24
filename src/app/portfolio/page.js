import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
];

export default function MyChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
}