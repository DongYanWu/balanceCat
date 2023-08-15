import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import AccountsBox from "@/components/AccountsBox";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AccountsBox />
      <FrequentlyAskedQuestions />
    </div>
  );
}
