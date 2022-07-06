const watchAddr = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });

  await Moralis.Cloud.run(
    "watchBscAddress",
    { address: "0x..." },
    { useMasterKey: true }
  ).then((result) => {
    console.log(result);
  });
};

watchAddr();
ts-node watchAddr.ts
