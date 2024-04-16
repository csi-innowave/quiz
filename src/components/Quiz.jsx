import { useState } from "react";
import Questions from "./Questions";
import { WavyBackground } from "./ui/wavy-background";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MoveNextQuestion, MovePrevQuestion } from "../Hooks/fetchQuestion";
import { PushAnswer } from "../Hooks/setResult";
const Quiz = () => {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <div className=" bg-black ">
      <img
        src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
        className="absolute z-20 h-16 md:h-24 top-5 right-5"
      />
      <WavyBackground className="  mx-auto pt-10 ">
        <div className="tablet:mt-[12%] desktop:mt-[9%] largest:mt-[5%] mt-[15%] mx-2">
          <Questions onChecked={onChecked} />
          <div className="grid grid-cols-2 mx-5 md:mx-16 gap-20 md:gap-32">
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={onPrev}
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF8DC_0%,#DC6B19_50%,#F7C566_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[12px] md:text-sm text-blue-200 font-bold backdrop-blur-3xl">
                P R E V I O U S
              </span>
            </button>
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={onNext}
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF8DC_0%,#DC6B19_50%,#F7C566_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[12px] md:text-sm text-blue-200 font-bold  backdrop-blur-3xl">
                N E X T
              </span>
            </button>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Quiz;
