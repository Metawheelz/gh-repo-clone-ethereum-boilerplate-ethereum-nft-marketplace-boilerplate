const tranx = async () => {
  await Moralis.start({ serverUrl, appId, moralisSecret });

  // Enable web3
  await Moralis.enableWeb3({
    //BSC mainnet
    chainId: 0x38,
    privateKey: "YOUR-PRIVATE KEY",
  });

  // sending 0.5 DAI tokens with 18 decimals on BSC mainnet
  const options: Moralis.TransferOptions = {
    type: "erc20",
    amount: Moralis.Units.Token("0.5", 18),
    receiver: "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895",
    contractAddress: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  };
  await Moralis.transfer(options).then((result) => {
    console.log(result);
  });
};

tranx();
ts-node tranx.ts