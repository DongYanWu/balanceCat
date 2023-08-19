import BasicLineChart from "@/components/userpage/BasicLineChart";
import NavBar from "@/components/NavBar";
// import YearPicker from "@/components/YearPicker";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import DataCard from "@/components/userpage/DataCard";

export default function UserPage() {
  return (
    <CardTemplate>
      <NavBar />
      <BasicLineChart />
      <div style={{ display: "flex" }}>
        <DataCard
          isDebitCard
          color="linear-gradient(to bottom, #ddd3ff, #fdcbff)"
        />
        <DataCard color="linear-gradient(to bottom, #8ee8f7, #b0f2f0)" />
      </div>
    </CardTemplate>
  );
}
