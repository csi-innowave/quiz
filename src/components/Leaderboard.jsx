
import ResultTable from "./resultTable";
const Leaderboard = () => {
  return (
      <>
        <div className=" bg-contain bg-repeat" style={{backgroundImage: `url('https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713119651/CSI%20Website/Quiz/background_pdy1uy.png')`}}>
          <div className="mx-44">
            <h1 className="text-3xl md:text-7xl  text-white text-center font-bold mb-7 pt-7">
              LeaderBoard
            </h1>
            <ResultTable/>
          </div>
        </div>
      </>
  );
};

export default Leaderboard;
