import Facebook from "../../../public/svgs/Facebook";
import Instagram from "../../../public/svgs/Instagram";
import TikTok from "../../../public/svgs/TikTok";

export default function PaintEarn() {
  return (
    <div className="relative my-2">
      <div className="absolute top-0 right-4 flex flex-col mr-auto top-10">
        <div className="bg-white rounded-full w-8 p-2">
          <Instagram fill="black" />
        </div>
        <div className="bg-white rounded-full w-8 p-2">
          <TikTok fill="black" />
        </div>
        <div className="bg-white rounded-full w-8 p-2">
          <Facebook fill="black" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="mx-16 grid gap-6">
          <h1 className="text-7xl font-bold mt-24">
            THIS IS <br /> PAINT&EARN!
          </h1>
          <div className="text-2xl grid gap-4">
            <h2 className="text-blue">Rule #1: Join the Paint&Earn club!</h2>
            <h2 className="text-green">
              Step into an eclectic, ever-changing multiverse of street art with
              our vibrant regens community!
            </h2>
            <h2>
              We&aposre a passionate and uplifting group dedicated to web3,
              sustainability, gaming, and exploring the infinite possibilities
              of creativity and energy Grab your spray cans, bring your A-game,
              and let&aposs refi some art together!
            </h2>
          </div>
          <div className="text-2xl grid gap-4">
            <h2 className="text-blue">
              Rule #2: get a wallet! (DYOR or let us DYOR)
            </h2>
            <h2 className="text-green">
              Crypto-phobia? No worries, we&aposll guide you through the process
              and make earning rewards a piece of cake!
            </h2>
            <h2>
              Our eclectic brojects will unleash your inner geeky So, grab your
              spray cans and join us in the world of Web3 for some epic street
              art adventures!
            </h2>
          </div>
        </div>
        <div className="text-3xl flex items-center justify-center">
          VERY GOOD VERY NICE IMAGES IN HERE
        </div>
      </div>
    </div>
  );
}
