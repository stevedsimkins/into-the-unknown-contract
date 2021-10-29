const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Wirt", "Greg", "The Woodsman"],
    ["https://gateway.pinata.cloud/ipfs/QmYFAYaxDmwAxgX2HVeUv8QRHagVRYyUFWV7Vs7FiTkkeN",
      "https://gateway.pinata.cloud/ipfs/QmS8wZQ58EfiBuEJcvEsRWNbToDTXJfdwKvxZ5dspvVZTX",
      "https://gateway.pinata.cloud/ipfs/Qmaymqi4SpWT4YhRWWWuttX5TwmMvCvXLRv7YFxjFd2xkC"],
    [400, 300, 350],
    [125, 150, 100],
    "The Beast",
    "https://gateway.pinata.cloud/ipfs/QmRnhnbLeZP2sGA3tewitFSz2uN7XnQqHjL24wUx9yxCEr",
    50000,
    75
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;
  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #2");

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
