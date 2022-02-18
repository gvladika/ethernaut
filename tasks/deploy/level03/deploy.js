async function main() {
  // We get the contract to deploy
  const CoinFlipExploiter = await ethers.getContractFactory("CoinFlipExploiter");
  const coinFlipExploiter = await CoinFlipExploiter.deploy("0xD65daa023a218F8246eb60cefCe495Fa93f5eCf1");

  console.log("CoinFlipExploiter deployed to:", coinFlipExploiter.address);
  for (let i = 0; i < 10; i++) {
    console.log("Flip #", i);
    await coinFlipExploiter.flip();
    await new Promise(r => setTimeout(r, 20000));
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
