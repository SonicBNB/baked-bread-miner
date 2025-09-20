import { useState, useEffect } from "react";

export default function useTonKeeper() {
  const [providerDetected, setProviderDetected] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [checkedOnce, setCheckedOnce] = useState(false);

  useEffect(() => {
    let interval;

    const detectAndConnect = async () => {
      if (window.ton) {
        console.log("TON detected ✅", window.ton);
        setProviderDetected(true);

        // Only attempt connect once per session
        if (!checkedOnce) {
          setCheckedOnce(true);
          try {
            console.log("Attempting automatic connection...");
            if (typeof window.ton.request === "function") {
              const accounts = await window.ton.request({ method: "ton_requestAccounts" });
              console.log("Accounts returned:", accounts);
              if (accounts && accounts.length > 0) {
                setWallet(accounts[0].address || accounts[0]);
                setIsConnected(true);
              } else {
                console.warn("No accounts found in TON Keeper");
              }
            } else {
              console.warn("window.ton.request not a function. Keys:", Object.keys(window.ton));
            }
          } catch (err) {
            console.error("Failed automatic connection:", err);
          }
        }

        clearInterval(interval); // stop retrying once detected
      } else {
        console.log("TON not detected ❌", window.ton);
      }
    };

    // Check immediately and then every second
    detectAndConnect();
    interval = setInterval(detectAndConnect, 1000);

    return () => clearInterval(interval);
  }, [checkedOnce]);

  const connect = async () => {
    if (!window.ton) {
      console.error("Cannot connect: TON not detected", window.ton);
      return;
    }

    try {
      console.log("Manual connect triggered...");
      if (typeof window.ton.request === "function") {
        const accounts = await window.ton.request({ method: "ton_requestAccounts" });
        console.log("Accounts returned:", accounts);
        if (accounts && accounts.length > 0) {
          setWallet(accounts[0].address || accounts[0]);
          setIsConnected(true);
        } else {
          console.warn("No accounts found in TON Keeper");
        }
      } else {
        console.warn("window.ton.request not a function. Keys:", Object.keys(window.ton));
      }
    } catch (err) {
      console.error("Manual connection failed:", err);
    }
  };

  return { providerDetected, isConnected, wallet, connect };
}
