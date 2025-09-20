import React, { useEffect, useState } from "react";
import useTonKeeper from "../hooks/useTonKeeper";

export default function MinerDashboard() {
  const { wallet, isConnected, providerDetected, connect } = useTonKeeper();
  const [checkedOnce, setCheckedOnce] = useState(false);

  // Wait a few seconds to check if TON Keeper is really missing
  useEffect(() => {
    const timer = setTimeout(() => setCheckedOnce(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Baked Bread Miner</h1>

      {!providerDetected && checkedOnce && (
        <p className="text-red-500 mb-4">
          Please install TON Keeper Wallet in Chrome/Brave/Edge.
        </p>
      )}

      {providerDetected && !isConnected && (
        <button
          onClick={connect}
          className="bg-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-yellow-600"
        >
          Connect TON Wallet
        </button>
      )}

      {isConnected && wallet && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          <p>
            <strong>Connected Wallet:</strong> {wallet}
          </p>
          <p>
            <strong>Dough Balance:</strong> 0 {/* Replace with actual balance later */}
          </p>
        </div>
      )}
    </div>
  );
}
