import { BackgroundBeams } from "./ui/background-beams";
import ResultTable from "./resultTable";
import "./ui/leaderboard.css";
const Leaderboard = () => {
  return (
    <div>
      <div className="h-screen w-full relative pt-5 antialiased ">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-neutral-600  text-center font-sans font-bold">
            LeaderBoard
          </h1>
          <ResultTable />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
