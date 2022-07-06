const serverUrl = "https://hydurag5jeq8.usemoralis.com:2053/server";
const appId = "86zoYQf4yXe4xH8Jnz8e8irfUw0jODZ70SvnfaK6";
const moralisSecret = "n4rjwWGWwfwklCqkFAemhUrA4rJ1RflZLcJRqb1d";

const web3API = async () => {
  await Moralis.start({ serverUrl, appId, moralisSecret });

  const price = await Moralis.Web3API.token.getTokenPrice({
    address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    chain: "bsc",
  });
  console.log(price);
};

web3API();
ts-node Web3API.ts
