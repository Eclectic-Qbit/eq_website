"use client";

import { useEffect, useState } from "react";
import WalletContext from "@/contexts/WalletContext";

export default function WalletProvider({children}) {
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        if(!wallet) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            provider.send("eth_requestAccounts", []);

            const signer = provider.getSigner();

            wallet !== null && setWallet(signer);
        }

        console.log('Connected.');
    }, [wallet, setWallet]);

    return(
        <WalletContext.Provider value={{ wallet, setWallet }}>
            {children}
        </WalletContext.Provider>
    )
}