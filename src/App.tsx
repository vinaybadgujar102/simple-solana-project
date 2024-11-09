import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";
import { Airdrop } from "./Airdrop";
import { GridBackground } from "./components/GridBackground";

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="app-container">
            <GridBackground />
            <h1 className="title">Solana Airdrop Portal</h1>
            <div className="main-content">
              <div className="wallet-section">
                <WalletMultiButton />
              </div>
              <Airdrop />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
