async function main() {
  // We get the contract to deploy
  const TelephoneExploiter = await ethers.getContractFactory("TelephoneExploiter");
  const telephoneExploiter = await TelephoneExploiter.deploy("0x9D5596026C235755d73a423B5c9943704BfdfCB5");

  console.log("TelephoneExploiter deployed to:", telephoneExploiter.address);
  await telephoneExploiter.takeOwnership();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
