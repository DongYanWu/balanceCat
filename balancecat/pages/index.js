import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
// import AccountsBox from "@/components/AccountsBox";
import AssetsOverview from "@/components/AssetsOverview";
import DateSelector from "@/components/DateSelector";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* <AccountsBox /> */}
      <DateSelector />
      <AssetsOverview />
      <FrequentlyAskedQuestions />
    </div>
  );
}
