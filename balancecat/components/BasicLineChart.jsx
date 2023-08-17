import dynamic from "next/dynamic";

const DynamicLineChart = dynamic(
  () => import("@mui/x-charts").then((mod) => mod.LineChart),
  {
    ssr: false, // This will load the component only on the client side
    loading: () => <p>Loading...</p>,
    // eslint-disable-next-line prettier/prettier
  }
);
export default function BasicLineChart() {
  return (
    <DynamicLineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
