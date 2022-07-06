const watchEvent = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });
  // code example of creating a sync event from cloud code
  let options = {
    chainId: "42",
    // UniswapV2Factory contract
    address: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    topic: "PairCreated(address, address, address, uint256)",
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token0",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "token1",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "pair",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "test",
          type: "uint256",
        },
      ],
      name: "PairCreated",
      type: "event",
    },
    limit: 500000,
    tableName: "UniPairCreated",
    sync_historical: false,
  };

  Moralis.Cloud.run("watchContractEvent", options, { useMasterKey: true }).then(
    (result) => {
      console.log(result);
    }
  );
};

watchEvent();
ts-node watchEvent.ts
