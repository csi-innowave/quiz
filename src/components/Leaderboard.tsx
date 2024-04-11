import { BackgroundBeams } from "./ui/background-beams";

const Leaderboard = () => {
  return (
    <div>
      <div className="h-screen w-full bg-neutral-950 relative pt-5 antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            LeaderBoard
          </h1>
          <p></p>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Leaderboard;
