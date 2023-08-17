import BasicLineChart from "@/components/BasicLineChart";
import NavBar from "@/components/NavBar";
// import YearPicker from "@/components/YearPicker";
import ChartCard from "@/components/ChartCard";
import Test from "@/components/Test";

export default function UserPage() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Select a Year</h1>
        {/* <YearPicker /> */}
        {/* ... other components or elements */}
      </div>
      <BasicLineChart />
      <div style={{ display: "flex" }}>
        <ChartCard />
        <Test />
      </div>
    </div>
  );
}
