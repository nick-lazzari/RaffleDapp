const ENTRANCE_FEE = ethers.utils.parseEther("0.1")

module.export = async ({ getNamedAccounts, deployments }) => {
    const {deploy, log} = deployments
    const { deployer } = await getNamedAccounts()

    const args = [ENTRANCE_FEE, "300", ] 

}