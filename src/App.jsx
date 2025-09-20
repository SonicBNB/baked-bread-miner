import React from "react";
import MinerDashboard from "./components/MinerDashboard";
import BatchShop from "./components/BatchShop";
import ActiveBatches from "./components/ActiveBatches";
import PatienceBonus from "./components/PatienceBonus";
import Referral from "./components/Referral";

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-50 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Baked Bread Miner</h1>
        <p className="text-gray-700">Invest TON, Bake Dough, Earn Daily</p>
      </header>

      <MinerDashboard />
      <BatchShop />
      <ActiveBatches />
      <PatienceBonus />
      <Referral />
    </div>
  );
}
