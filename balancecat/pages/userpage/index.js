import BasicLineChart from "@/components/BasicLineChart";
import NavBar from "@/components/NavBar";
// import YearPicker from "@/components/YearPicker";
import ChartCard from "@/components/ChartCard";
import Test from "@/components/Test";
import CardTemplate from "@/components/cardTemplate/CardTemplate";

export default function UserPage() {
  return (
    <CardTemplate>
      <NavBar />
      <BasicLineChart />
      <div style={{ display: "flex" }}>
        <ChartCard />
        <Test />
      </div>
    </CardTemplate>
  );
}
