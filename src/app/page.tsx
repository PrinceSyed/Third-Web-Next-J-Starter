import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> Hello World </h2>
      <ConnectButton client={client} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/coinbase">
          Mint Coinbase Nft
        </Link>
      </button>

    </main>
  );
}


