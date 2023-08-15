import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import AssetsOverview from "@/components/AssetsOverview";
import Entries from "@/components/entriesForm/Entries";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Entries />

      <AssetsOverview />
      <FrequentlyAskedQuestions />
    </div>
  );
}
