const Home = () => {
  return (
    <div className="css-selector h-screen">
      <img
        src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
        className="absolute h-24 ml-5 mt-5"
      />
      <div className="flex justify-center items-center flex-col pt-[20%]">
        <div>
          <h1 className="bg-clip-text font-bold text-transparent drop-shadow-2xl text-3xl text-center md:text-4xl lg:text-7xl bg-gradient-to-b from-white/80 to-white/20">
            Welcome To The Quiz
          </h1>
        </div>
        <input
          placeholder="Enter Username"
          className="rounded-lg px-2 bg-slate-600 mt-5 mb-2 py-2 shadow-2xl shadow-zinc-900 text-lg text-white"
        />
        <div>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-md lg:text-lg font-semibold leading-6  text-white inline-block">
            <span className="overflow-hidden rounded-full">
              <span className="rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex  items-center z-10 rounded-full bg-zinc-950 py-1 px-4  ">
              <span>Get Started</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
