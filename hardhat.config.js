require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MAINNET_RPC_URL =
    module.exports = {
        solidity: {
            compilers: [
                {
                    version: "0.8.7",
                },
                {
                    version: "0.4.24",
                },
            ],
        },
        mocha: {
            timeout: 500000, // 500 seconds max for running tests
        },
    }
