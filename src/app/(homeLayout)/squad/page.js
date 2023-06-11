"use client";

import ImgTab from "../../../../public/images/team/4.png";
import ImgEnry from "../../../../public/images/team/3.png";
import ImgPipo from "../../../../public/images/team/6.png";
import ImgAdi from "../../../../public/images/team/7.png";
import ImgAxel from "../../../../public/images/team/1.png";
import ImgAbra from "../../../../public/images/team/5.png";
import ImgPari from "../../../../public/images/team/8.png";
import ImgMilena from "../../../../public/images/team/10.png";
import SquadCard from "@/components/global/Cards";

export default function Squad() {
  return (
    <div className="relative pt-32 pb-4 sm:pt-28 sm:pb-12 top-0 left-0 w-full h-full min-h-screen flex flex-wrap items-center justify-center gap-5">
      <SquadCard
        img={ImgTab}
        name="Tabata"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/tabata-mussone-287426142",
          },
        ]}
        langs={["🇬🇧", "🇮🇹", "🇪🇸", "🇫🇷"]}
      />
      <SquadCard
        img={ImgEnry}
        name="Enrico"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/enrico-pasetto-6a48a5193/",
          },
        ]}
        langs={["🇬🇧", "🇮🇹"]}
      />
      <SquadCard
        img={ImgPipo}
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
        img={ImgAdi}
        name="Aditya"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/aditya2525",
          },
        ]}
        langs={["🇬🇧", "🇮🇳"]}
      />
      <SquadCard
        img={ImgAxel}
        name="Axel"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/axel-nieto-418551167",
          },
        ]}
        langs={["🇬🇧", "🇪🇸", "🇫🇷", "🇩🇪"]}
      />
      <SquadCard
        img={ImgAbra}
        name="Abrayadh"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/abdulrahman-yakubu-a993a5233/",
          },
        ]}
        langs={["🇬🇧", "🇳🇬"]}
      />
      <SquadCard
        img={ImgPari}
        name="Pariyeksh"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/pariyeksh-chauhan",
          },
        ]}
        langs={["🇬🇧", "🇮🇳"]}
      />
      <SquadCard
        img={ImgMilena}
        name="Milena"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/milena-antoni%C4%87-634237143",
          },
        ]}
        langs={["🇬🇧", "🇷🇸"]}
      />
    </div>
  );
}
