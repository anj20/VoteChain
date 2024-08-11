require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "LYl532JVFJWY7P6-2PDUs_XmNbykS4pY";
const SEPOLIA_ALCHEMY_API_KEY = "MZ_n9sulIb0O2ftWEPlYuA46TmJwNSjj";
const PRIVATE_KEY ="72a1cd38978b9784836554fe3f30dd85f83bc96494d1779e34f496e54e8f4f9d";
// console.log(PRIVATE_KEY);
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    opsepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/MZ_n9sulIb0O2ftWEPlYuA46TmJwNSjj`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    virtual_mainnet: {
      url: "https://virtual.mainnet.rpc.tenderly.co/76ca45af-3cc9-486e-81ae-286c88e9711d",
      chainId: 73571,
      currency: "VETH"
    }
  },
  // tenderly: {
  //   project: "blockvotechain",
  //   username: "anj20",
  // }
};

// {
//   network: 'scroll_testnet',
//   chainId: 534351,
//   urls: {
//     apiURL: 'https://sepolia-blockscout.scroll.io/api',
//     browserURL: 'https://sepolia-blockscout.scroll.io',
//   },
// }
