import Magnifier from "../../../public/svgs/Magnifier";

export default function Menu() {
  return (
    <div className="flex items-center space-x-full text-3xl mx-16 mt-8">
      <div className="flex gap-4">
        <h1>PNG</h1>
        <div className="flex flex-col">
          <h1>Eclectic</h1>
          <h1 className="font-bold">Qbit</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <button className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
        </button>
        <div>
          <h1>HOME</h1>
        </div>
        <div>
          <h1>ARTISTS</h1>
        </div>
        <div>
          <h1>NFT PROJECTS</h1>
        </div>
        <div>
          <h1>TEAM</h1>
        </div>
        <div>
          <h1>CONTACTS</h1>
        </div>
        <div className="relative flex items-center border-2 border-solid border-white max-w-[20vw]">
          <button className="w-12 relative scale-50">
            <Magnifier fill="white" />
          </button>
          <input
            type="text"
            className="w-full h-full bg-black focus:outline-none text-2xl"
          />
        </div>
      </div>
    </div>
  );
}
