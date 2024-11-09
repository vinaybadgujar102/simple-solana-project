import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  async function sendAirdropToUser() {
    if (!wallet.publicKey || !amount) {
      return;
    }
    try {
      const lamports = Number(amount) * 1000000000; // Convert SOL to lamports
      await connection.requestAirdrop(wallet.publicKey, lamports);
      alert("Airdrop successful!");
      setAmount("");
    } catch (error) {
      alert("Airdrop failed: " + error.message);
    }
  }

  return (
    <div className="airdrop-container">
      {wallet.publicKey && (
        <div className="wallet-address">{wallet.publicKey.toString()}</div>
      )}
      <div className="input-group">
        <input
          type="number"
          placeholder="Enter amount in SOL"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.1"
        />
        <button
          onClick={sendAirdropToUser}
          disabled={!wallet.publicKey || !amount}
        >
          Request Airdrop
        </button>
      </div>
    </div>
  );
}
