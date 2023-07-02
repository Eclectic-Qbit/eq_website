"use client";

import { useEffect, useState, useContext } from "react";
import { IndexCard } from "@/components/global/Cards";
import { P1, P2 } from "@/components/text/Paragraphs";
import AuthContext from "@/contexts/AuthContext";

async function GetUserStats(url) {
    const result = await fetch(url, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_USER_DATA_API_KEY
        }
    });

    const data = await result.json();

    return data;
}

export default function Inventory() {
    const [mint, setMint] = useState(null);
    const ZEALY_API_URL = "/communities/unboxed";
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        console.log(userInfo);
        GetUserStats(`${ZEALY_API_URL}/users?discordId=${userInfo.id}`);
    });

    return (
        <>
            <div className="overflow-hidden">
                <div className="pt-20 mx-[10%] text-center flex flex-col justify-center items-center">
                    <div className="my-[5%] realtive w-full h-full flex flex-col items-center justify-center gap-2 text-center">
                        <IndexCard
                            form={"square"}
                            front={
                                <div
                                    style={{ textShadow: "1px 1px 1px white" }}
                                    className="h-full font-bold uppercase flex flex-col justify-evenly grayscale text-[#C0C0C0]"
                                >
                                    <P1 translationPath={"paintEarn/secondCard/front/quest-zero"} />
                                    <P2
                                        translationPath={"paintEarn/secondCard/front/quest-zero-description"}
                                    />
                                </div>
                            }
                            retro={
                                <div className="h-full w-full flex justify-center items-center">
                                    <P1
                                        translationPath={"paintEarn/secondCard/quest-zero-status"}
                                        className="grayscale hover:scale-[1.5] hover:grayscale-0"
                                    />
                                    <div>
                                        <button>Mint</button>
                                        <button>Proceed</button>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}