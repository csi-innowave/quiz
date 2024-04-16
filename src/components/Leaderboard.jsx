
import ResultTable from "./resultTable";
const Leaderboard = () => {
  return (
      <>
        <div className=" bg-contain min-h-screen" style={{backgroundImage: `url('https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713119651/CSI%20Website/Quiz/background_pdy1uy.png')`}}>
          <div className="lg:mx-44">
            <h1 className="lg:text-9xl text-6xl font-jersey text-transparent text-center  font-bold mb-7 pt-7  bg-gradient-to-r from-[#5170ff] to-[#ff66c4]  bg-clip-text">
              LEADERBOARD
            </h1>
            <ResultTable/>
          </div>
        </div>
      </>
  );
};

export default Leaderboard;
