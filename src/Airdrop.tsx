import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// the usewallet hook gives us access to the connected wallet
export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    if (!wallet.publicKey) {
      return;
    }
    await connection.requestAirdrop(wallet.publicKey, 100000); // 0.1 SOL = 100000 lamports
    alert("Airdrop successful");
  }

  return (
    <div>
      <p>Wallet address: {wallet.publicKey?.toString()}</p>
      <input type="text" placeholder="Enter the airdrop amount" />
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
}
