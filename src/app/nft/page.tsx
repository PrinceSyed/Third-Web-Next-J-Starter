export const dynamic = "force-dynamic";

export default async function NftPage() {
  const ownerAddress = '8NK8YiUyj4j6gWg3oQbmnLxXxg5Ry55ZPEoXcQ1cL35P';
  const groupValue = 'FEQe1wT3RLwCPs1YCamxFGYsr5fpi9XCEdDNUttu8efY';
  const apiKey = process.env.NEXT_PUBLIC_HELIX_API_KEY;
  const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;

  let ownsNFTInGroup;
  let assets;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: { ownerAddress: ownerAddress, page: 1, limit: 1000 }
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch NFT data');
  }

  const json = await res.json();
  assets = json.result.items;
  ownsNFTInGroup = assets.some(asset => asset.grouping?.some(group => group.group_value === groupValue));

  return (
    <main>
      {ownsNFTInGroup ? (
        <div>
          <h1>User owns an NFT in the specified group!</h1>
          <ul>
            {assets.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2>
                <p>ID: {item.id}</p>
                <p>{item.description}</p>
                <img src={item.image} alt={item.name} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>User does not own any NFTs in the specified group.</h1>
        </div>
      )}
    </main>
  );
}
