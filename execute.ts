const execute = async () => {
  await Moralis.start({ serverUrl, appId, moralisSecret });

  // Enable web3
  await Moralis.enableWeb3({
    chainId: 0x1,
    privateKey:
      "afcf6a8d1a2b9e20bd322850afb28085693f436427fe8da3d0e40954cfb2d0dc",
  });

  const options = {
    // CAPSULE contract
    contractAddress: "0xfcb1315c4273954f74cb16d5b663dbf479eec62e",
    // calling tokenURI function
    functionName: "tokenURI",
    // contract ABI
    abi: [
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    // token URI of token ID 700
    params: { tokenId: 700 },
  };
  await Moralis.executeFunction(options).then((result) => {
    console.log(result);
  });
};

execute();
ts-node execute.ts
