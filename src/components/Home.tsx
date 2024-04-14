import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current && inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="css-selector h-screen">
      <div
        className="bg-cover h-full w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpp2rltxx/image/upload/v1713111288/csi/qyuz/viosdwl78ch8biqxmko6.png')",
        }}
      >
        <div className="relative md:gap-10 gap-5 z-20 pt-5 flex justify-center items-center mx-auto">
          <img
            src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1713109149/csi/qyuz/hfumyw1sacge8ooeqaro.png"
            className="md:h-40 h-24"
          />
          <img
            src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
            className="md:h-36 h-20"
          />
          <img
            src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1713109150/csi/qyuz/x4kj6d42uqlrcdzg2mvb.png"
            className="md:h-36 h-20"
          />
        </div>

        <div className="flex justify-center items-center flex-col pt-[2%] md:pt-0 ">
          <div>
            <h1 className="md:text-[9rem] text-8xl text-center font-jersey text-white text-glow">
              WELCOME
            </h1>
            <h1 className="md:text-8xl text-5xl text-center font-extrabold font-spartan text-gray-300 ">
              TEST YOUR KNOWLEDGE
            </h1>
          </div>
          <input
            ref={inputRef}
            placeholder="ENTER USERNAME"
            className="rounded-xl text-white placeholder-white text-center px-2 bg-black bg-opacity-70 md:bg-transparent mt-5 mb-2 py-2 text-3xl font-semibold font-fjalla 
    shadow-white"
          />
        </div>
        <Link to={"/quiz"} className="relative flex justify-center pt-[2%]">
          <button onClick={startQuiz} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl" />
            <div className="px-8 py-2 text-2xl font-fjalla bg-black rounded-xl  relative group transition duration-200 text-white hover:bg-transparent">
              G E T <br /> S T A R T E D
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
