import ConsoleEffect from "../animations/ConsoleEffect";

export default function HowWeDo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-4 ml-[20%] mr-[10%]">
        <h1 className="font-bold mb-8 text-center text-purple">
          <span className="text-7xl">THIS IS</span> <br />{" "}
          <span className="text-8xl">HOW WE DO IT</span>
        </h1>
        <div className="grid gap-2">
          <div>
            <h2>
              <span className="text-orange font-bold font-bold pr-2">
                Launch Parties:
              </span>
              <ConsoleEffect
                content="just like the beginning of a new adventure, 
              we celebrate the launch of your project with a party that gets everyone 
              excited and ready to jump in"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Power-Ups:</span>
              <ConsoleEffect
                content="our
              team provides guidance and resources to help your community
              members level up and reach new milestones"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">High Scores:</span>
              <ConsoleEffect
                content="we
              track and celebrate the achievements of our eclectic koopas, from
              the number of piece of art created to the amount of poaps
              collected & beyond"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Warp Pipes:</span>
              <ConsoleEffect
                content="we
              build a discord server that provides a space for eclectic koopas
              to connect, share ideas, and provide feedback on your project"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Contests:</span>
              <ConsoleEffect
                content="we
              organize regular contests that allow eclectic koopas to show off
              their skills and earn prizes"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Global Events:</span>
              <ConsoleEffect
                content="our team coordinates global irl events, as online voice channels &
              activities to bring together eclectic koopas from around the world"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Partnerships:</span>
              <ConsoleEffect
                content="we
              help our eclectic koopas form partnerships with other web3
              projects, expanding their reach and building new connections"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">
                Fan Art Contests:
              </span>
              <ConsoleEffect
                content="our eclectic koopas can showcase their creativity and love for
              your project through fan art contests, where winners are rewarded
              with nft and prizes"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">Game Nights: </span>
              <ConsoleEffect
                content="we
              organize fun game nights where eclectic koopas can play&earn
              games, compete with each other, and build strong relationships"
              />
            </h2>
          </div>
          <div>
            <h2>
              <span className="text-orange font-bold pr-2">
                Quantum Predictions:
              </span>
              <ConsoleEffect
                content="we use the power of quantum mechanics to create prediction markets
              where eclectic koopas can use their knowledge and intuition to
              predict the future of the project"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
