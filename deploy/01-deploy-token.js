const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

const SUPPLY = "500000000000";
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts;

    await deploy("OurToken", {
        from: deployer,
        log: true,
        args: [SUPPLY],
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log("Contract Deployed successfully")
}