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
            className="md:h-32 h-24"
          />
          <img
            src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
            className="md:h-24 h-20"
          />
          <img
            src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1713109150/csi/qyuz/x4kj6d42uqlrcdzg2mvb.png"
            className="md:h-24 h-20"
          />
        </div>

        <div className="flex justify-center items-center flex-col pt-[5%]">
          <div>
            <h1 className="text-white font-fjalla">Welcome To The Quiz</h1>

            <div className="text-white text-xl font-jersey">
              Text with Jersey-15 font
            </div>
            <div className="text-white text-xl font-spartan">
              Text with Jersey-15 font
            </div>
          </div>
          <input
            ref={inputRef}
            placeholder="Enter Username"
            className="rounded-lg px-2 bg-slate-800 mt-5 z-10  mb-2 py-2 shadow-2xl shadow-zinc-900 text-lg font-sans font-semibold text-white"
          />
        </div>
        <Link to={"/quiz"} className="relative flex justify-center top-40">
          <button onClick={startQuiz} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
