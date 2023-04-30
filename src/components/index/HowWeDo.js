"use client";

import ConsoleEffect from "../animations/ConsoleEffect";
import ShowOnHover from "../animations/ShowOnHover";

export default function HowWeDo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-4 w-full max-w-[130rem]">
        <h1 className="font-bold mb-8 text-center text-purple">
          <span className="text-7xl">THIS IS</span> <br />{" "}
          <span className="text-8xl">HOW WE DO IT</span>
        </h1>
        <div className="flex flex-col gap-5 mx-[10%]">
          <ShowOnHover>
            <span className="text-orange pr-2">💬 Warp Pipes</span>
            <ConsoleEffect content="we build a discord server that provides a space for eclectic Koopas to connect, share ideas, and provide feedback on your project" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🎉 Contests</span>
            <ConsoleEffect content="we organize regular contests that allow eclectic Koopas to show off their skills and earn prizes" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🍄 Power-Ups</span>
            <ConsoleEffect content="our team provides guidance and resources to help your community members level up and reach new milestones" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🏆 High Scores</span>
            <ConsoleEffect content="we track and celebrate the achievements of our eclectic koopas, from the number of piece of art created to the amount of poaps collected & beyond" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🧑‍🤝‍🧑 Partnerships</span>
            <ConsoleEffect content="we help our eclectic Koopas form partnerships with other web3 projects & beyond, expanding their reach and building new connections" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🎨 Fan Art Contests</span>
            <ConsoleEffect content="our eclectic Koopas can showcase their creativity and love for your project through fan art contests, where winners are rewarded with nft and prizes" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🕹️ Game Nights</span>
            <ConsoleEffect content="we organize fun game nights where eclectic Koopas can play&earn games, compete with each other, and build strong relationships" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🌟 Launch Parties</span>
            <ConsoleEffect content="just like the beginning of a new adventure, we celebrate the launch of your project with a party that gets everyone excited and ready to jump in" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🌎 Global Events</span>
            <ConsoleEffect content="our team coordinates global irl events, as online voice channels & activities to bring together eclectic Koopas from around the world" />
          </ShowOnHover>
          <ShowOnHover>
            <span className="text-orange pr-2">🔮 Quantum Predictions</span>
            <ConsoleEffect content="inspired by quantum mechanics's principles, we'll create prediction markets where eclectic Koopas can use their knowledge and intuition to predict the future of the project" />
          </ShowOnHover>
        </div>
      </div>
    </div>
  );
}
