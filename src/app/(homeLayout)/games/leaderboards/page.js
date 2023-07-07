import { H4, H6 } from "@/components/text/Headers";
import { P1, P2, P3 } from "@/components/text/Paragraphs";
import { cookies } from "next/headers";

// Query @ /games/:name/leaderboards/
export default async function Leaderboards() {
  const data = await getLeaderboards();
  const cookieList = cookies();
  return (
    <div className="w-full h-full min-h-screen text-center mt-28">
      <P1>Memory Rankings:</P1>
      <div className="flex justify-center w-full mt-10">
        <div className="mx-[2.5%] max-w-[1500px] w-full">
          <div className="w-full h-full flex justify-center flex-wrap gap-10">
            <div className="min-w-[280px] w-full max-w-[45%] grid gap-5">
              <P2>Speedrun Ranking:</P2>
              <div className="border-2 border-solid border-white rounded-xl py-2 px-4">
                {data.byDuration.map((el, i) => {
                  return (
                    <div
                      className="flex px-2 gap-2 justify-between gap-4 border-b-2 border-solid border-white"
                      key={`lead_${i}`}
                    >
                      <P3>{el.user}</P3>
                      <P3>{el.value} seconds</P3>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="min-w-[280px] w-full max-w-[45%] grid gap-5">
              <P2>Games Played Ranking:</P2>
              <div className="border-2 border-solid border-white rounded-xl py-2 px-4">
                {data.byAttempts.map((el, i) => {
                  return (
                    <div
                      className="flex px-2 gap-2 justify-between gap-4 border-b-2 border-solid border-white"
                      key={`lead_${i}`}
                    >
                      <P3>{el.user}</P3>
                      <P3>{el.value} games played</P3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
async function getLeaderboards() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}games/memory/leaderboards`,
    {
      next: {
        revalidate: 15,
      },
    }
  );
  if (res.status === 200) {
    const json = await res.json();
    return json;
  } else {
    return null;
  }
}
