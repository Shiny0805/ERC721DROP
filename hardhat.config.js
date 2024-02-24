/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
// require("hardhat-erc1820");

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
   defaultNetwork: "bsctest",
   networks: {
      hardhat: {
         allowUnlimitedContractSize: true,
      },
      bsctest: {
         url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
         accounts: [`0x${PRIVATE_KEY}`],
      },
      polygonnet: {
         url: `https://polygon-rpc.com`,
         accounts: [`0x${PRIVATE_KEY}`],
      },
      bscmainnet: {
         url: `https://bsc-dataseed1.ninicoin.io`,
         accounts: [`0x${PRIVATE_KEY}`],
      },
      ethereum: {
         url: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
         accounts: [`0x${PRIVATE_KEY}`],
      },
      fantom: {
         url: `https://rpc.ftm.tools`,
         accounts: [`0x${PRIVATE_KEY}`],
      },
      fantomtestnet: {
         url: `https://rpc.testnet.fantom.network`,
         accounts: [`0x${PRIVATE_KEY}`],
      }

   },
   etherscan: {
      // Your API key for Etherscan
      apiKey: "IE96DG2BG4V1PDHSQCDBF23IQ2K11JUKVV" //Bsc network
      // apiKey: "3ZK2KG572I46MENHB1ZTKTNR3Y63GA8ZZD" //ethereum network
   },
   solidity: {
      version: "0.8.18",
      settings: {
         optimizer: {
            enabled: true
         }
      }
   }
}