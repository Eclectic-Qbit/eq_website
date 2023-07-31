import { P1, P2, P3 } from "@/components/text/Paragraphs";

// Query @ /games/:name/leaderboards/
export default async function Leaderboards() {
  const data = await getLeaderboards();
  return (
    <div className="w-full h-full min-h-screen text-center mt-28">
      <P1 className={"uppercase"} translationPath={"leaderboards/title"} />
      <div className="flex justify-center w-full mt-10">
        <div className="mx-[2.5%] max-w-[1500px] w-full">
          <div className="w-full h-full flex justify-center flex-wrap gap-10">
            <div className="min-w-[280px] w-full max-w-[45%] grid gap-5">
              <P2
                className={"lowercase"}
                translationPath={"leaderboards/speedrun/title"}
              />
              <div className="border-2 border-solid border-white rounded-xl py-2 px-4">
                {data ? (
                  data.byDuration.map((el, i) => {
                    return (
                      <div
                        className="flex flex-wrap px-2 gap-2 justify-between gap-4 border-b-2 border-solid border-white py-2"
                        key={`lead_${i}`}
                      >
                        <div className="flex gap-1 justify-center">
                          <P3>
                            {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 && "🥉"}
                          </P3>
                          <P3>{el.user}</P3>
                        </div>
                        <P3
                          translationPath={"leaderboards/speedrun/entry"}
                          replace={[{ placeholder: "%VAL%", val: el.value }]}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <P1>404 :/</P1>
                  </div>
                )}
              </div>
            </div>
            <div className="min-w-[280px] w-full max-w-[45%] grid gap-5">
              <P2
                className={"lowercase"}
                translationPath={"leaderboards/games/title"}
              />
              <div className="border-2 border-solid border-white rounded-xl py-2 px-4">
                {data ? (
                  data.byAttempts.map((el, i) => {
                    return (
                      <div
                        className="flex flex-wrap px-2 gap-2 justify-between gap-4 border-b-2 border-solid border-white py-2"
                        key={`lead_${i}`}
                      >
                        <div className="flex gap-1">
                          <P3>
                            {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 && "🥉"}
                          </P3>
                          <P3>{el.user}</P3>
                        </div>
                        <P3
                          translationPath={"leaderboards/games/entry"}
                          replace={[{ placeholder: "%VAL%", val: el.value }]}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <P1>404 :/</P1>
                  </div>
                )}
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
    `${process.env.NEXT_PUBLIC_API_ROUTE}games/memory/leaderboards`
  );
  if (res.status === 200) {
    const json = await res.json();
    return json;
  } else {
    return null;
  }
}
