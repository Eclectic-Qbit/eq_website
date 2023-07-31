import { P1, P2, P3, P4 } from "@/components/text/Paragraphs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getUserData } from "@/helpers/userHelper";
import { H5, H8 } from "@/components/text/Headers";
import CustomLink from "@/components/global/CustomLink";

export default async function LevelUp() {
  const cookieList = cookies();
  const { id } = jwt.decode(cookieList.get("token").value);
  const res = await getUserData(
    `${process.env.NEXT_PUBLIC_API_ROUTE}users/${id}`,
    {
      Authorization: cookieList.get("token").value,
    }
  );
  return (
    <div className="w-full h-full min-h-screen text-center mt-28 flex flex-col gap-10">
      <H8>
        Hello <b>{res.user.username}</b>
      </H8>
      <div className="flex flex-col gap-5">
        <P1>In EQ&apos;s environment there are 2 types of level-ups:</P1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <P2>
              Game-Points: once reached 100/100 game-points you will unlock a
              special discord role!
            </P2>
            <P4>
              But, be aware! Only 80/100 points can be obtained via gaming. The
              other ones must be archieved and other secret ways
            </P4>
          </div>
          <div className="flex flex-col gap-2">
            <P2>
              XPs: needed for levelling-up and unlocking new channels and
              functionalities on our discord!
            </P2>
            <P4>
              XPs are much more rare to obtain than game-points. You can obtain
              XPs doing certain tasks as: <br />
              - Ending a Paint&Earn run
              <br />- Ending the month in the TOP3 of a game in one or more
              leaderboards
            </P4>
          </div>
        </div>
      </div>
      <P1 className={"flex justify-center"}>
        You can check your game points and XPs @{" "}
        <CustomLink className={"cursor-none"} href={"/troopa"}>
          {res.user.username}
        </CustomLink>
      </P1>
    </div>
  );
}
