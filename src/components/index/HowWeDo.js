"use client";

import ConsoleEffect from "../animations/ConsoleEffect";
import ShowOnHover from "../animations/ShowOnHover";
import { H3, H4, H9 } from "../text/Headers";
import { P2 } from "../text/Paragraphs";

export default function HowWeDo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-4 w-full max-w-[130rem]">
        <div className="font-bold mb-8 text-center text-purple">
          <H4>THIS IS</H4>
          <H3>HOW WE DO IT</H3>
        </div>
        <div className="flex flex-col mx-[10%] lowercase gap-1">
          <ShowOnHover>
            <H9 className="text-orange pr-2">💬 Warp Pipes</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="we build a discord server that provides a space for eclectic Koopas to connect, share ideas, and provide feedback on your project"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🎉 Contests</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="we organize regular contests that allow eclectic Koopas to show off their skills and earn prizes"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🍄 Power-Ups</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="our team provides guidance and resources to help your community members level up and reach new milestones"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🏆 High Scores</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="we track and celebrate the achievements of our eclectic koopas, from the number of piece of art created to the amount of poaps collected & beyond"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🧑‍🤝‍🧑 Partnerships</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="we help our eclectic Koopas form partnerships with other web3 projects & beyond, expanding their reach and building new connections"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🎨 Fan Art Contests</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="our eclectic Koopas can showcase their creativity and love for your project through fan art contests, where winners are rewarded with nft and prizes"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🕹️ Game Nights</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="we organize fun game nights where eclectic Koopas can play&earn games, compete with each other, and build strong relationships"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🌟 Launch Parties</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="just like the beginning of a new adventure, we celebrate the launch of your project with a party that gets everyone excited and ready to jump in"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🌎 Global Events</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="our team coordinates global irl events, as online voice channels & activities to bring together eclectic Koopas from around the world"
            />
          </ShowOnHover>
          <ShowOnHover>
            <H9 className="text-orange pr-2">🔮 Quantum Predictions</H9>
            <ConsoleEffect
              additionalChar="_"
              placeholderChar="$ "
              content="inspired by quantum mechanics's principles, we'll create prediction markets where eclectic Koopas can use their knowledge and intuition to predict the future of the project"
            />
          </ShowOnHover>
        </div>
      </div>
    </div>
  );
}
