require("hardhat-deploy")
require("dotenv").config()
require("@nomiclabs/hardhat-waffle")


module.exports = {
  networks: {
    rinkeby: {
      url: 'https://eth-goerli.g.alchemy.com/v2/-9fD8fAIZbMlNngBxmcWA-fnluQREuHI',
      accounts: 'b5f35ec580b46bf786dc7886a0b927030e254608ba213829295c9108e0abf0d0',
      chainId: 4,
      saveDeployments: true,
    },
  },
  namedAccounts:{
    deployer:{
      default: 0
    },
  },
  solidity: "0.8.7",
};
