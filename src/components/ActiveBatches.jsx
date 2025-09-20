import React from "react";

export default function MinerDashboard() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-2xl font-semibold mb-2">Your Miner</h2>
      <p>Deposits: X TON</p>
      <p>Dough Tokens: 🥖 X</p>
      <p>Daily Yield: 2–4%</p>
      <div className="mt-4">
        <button className="bg-yellow-500 px-4 py-2 rounded mr-2">Compound</button>
        <button className="bg-green-500 px-4 py-2 rounded">Withdraw</button>
      </div>
    </div>
  );
}
