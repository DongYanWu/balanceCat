import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import AccountsBox from "@/components/AccountsBox";
import AssetsOverview from "@/components/AssetsOverview";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AccountsBox />
      <AssetsOverview />
      <FrequentlyAskedQuestions />
    </div>
  );
}
