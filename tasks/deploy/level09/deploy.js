async function main() {
    // We get the contract to deploy
    const KingExploiter = await ethers.getContractFactory("KingExploiter");
    const kingExploiter = await KingExploiter.deploy("0x552Ca791E87f7A5C68045CB0141f22E9fbf66D8e", { value: ethers.utils.parseEther("0.0025") });
    console.log("KingExploiter deployed to:", kingExploiter.address);

    await kingExploiter.becomeKing();
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
