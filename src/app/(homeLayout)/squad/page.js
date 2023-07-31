"use client";

import SquadCard from "@/components/global/Cards";
import { getTeamImages } from "@/commonFrontend";
import { useRef } from "react";

export default function Squad() {
  const teamArr = useRef(getTeamImages());
  return (
    <div className="relative pt-32 pb-4 sm:pt-28 sm:pb-12 top-0 left-0 w-full h-full min-h-screen flex flex-wrap items-center justify-center gap-5">
      <SquadCard
        img={teamArr.current[0]}
        name="Tabata"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/tabata-mussone-287426142",
          },
          {
            social: "telegram",
            link: "https://t.me/aregen",
          },
        ]}
        langs={["🇬🇧", "🇮🇹", "🇪🇸", "🇫🇷"]}
      />
      <SquadCard
        img={teamArr.current[1]}
        name="Enrico"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/enrico-pasetto-6a48a5193/",
          },
          {
            social: "telegram",
            link: "https://t.me/enrico_pasetto",
          },
        ]}
        langs={["🇬🇧", "🇮🇹"]}
      />
      <SquadCard
        img={teamArr.current[2]}
        name="Pipo"
        social={[
          {
            social: "instagram",
            link: "https://www.instagram.com/malpegados/",
          },
        ]}
        langs={["🇬🇧", "🇪🇸"]}
      />
      <SquadCard
        img={teamArr.current[3]}
        name="Aditya"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/aditya2525",
          },
          {
            social: "telegram",
            link: "https://t.me/AdityaSingh2525",
          },
        ]}
        langs={["🇬🇧", "🇮🇳"]}
      />
      <SquadCard
        img={teamArr.current[4]}
        name="Axel"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/axel-nieto-418551167",
          },
          {
            social: "telegram",
            link: "https://t.me/blahaxl",
          },
        ]}
        langs={["🇬🇧", "🇪🇸", "🇫🇷", "🇩🇪"]}
      />
      <SquadCard
        img={teamArr.current[5]}
        name="Abrayadh"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/abdulrahman-yakubu-a993a5233/",
          },
          {
            social: "telegram",
            link: "https://t.me/abrayadh1",
          },
        ]}
        langs={["🇬🇧", "🇳🇬"]}
      />
      <SquadCard
        img={teamArr.current[6]}
        name="Pariyeksh"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/pariyeksh-chauhan",
          },
          {
            social: "telegram",
            link: "https://t.me/pariyeksh",
          },
        ]}
        langs={["🇬🇧", "🇮🇳"]}
      />
      <SquadCard
        img={teamArr.current[7]}
        name="Milena"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/milena-antoni%C4%87-634237143",
          },
          {
            social: "telegram",
            link: "https://t.me/mille_ant",
          },
        ]}
        langs={["🇬🇧", "🇷🇸"]}
      />
      <SquadCard
        img={teamArr.current[8]}
        name="Jota"
        social={[
          {
            social: "instagram",
            link: "https://www.instagram.com/mansomambo/",
          },
        ]}
        langs={["🇬🇧", "🇷🇸"]}
      />
    </div>
  );
}
