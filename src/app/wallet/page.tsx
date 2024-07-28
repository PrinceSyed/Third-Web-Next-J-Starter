import React from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Link from 'next/link';

const endpoint = clusterApiUrl('mainnet-beta'); // Use 'mainnet-beta' for production
const wallets = [new PhantomWalletAdapter()];

const WalletSection = () => {
    const { connected } = useWallet();

    if (!connected) {
        return null;
    }

    return (
        <div className="wallet-section">
            <h2>Wallet Connected!</h2>
            <p>Welcome to your dashboard.</p>
            {/* Additional content for logged-in users can go here */}
        </div>
    );
};

export const LoginPage = () => {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="container">
                        <h1>Login with Solana Wallet</h1>
                        <WalletMultiButton />
                        <Link href="/nft" passHref>
                            <button className="btn">NFT</button>
                        </Link>
                        <WalletSection />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default LoginPage;
