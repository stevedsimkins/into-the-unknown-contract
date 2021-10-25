const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Wirt", "Greg", "The Woodsman"],
    ["https://cdn.weasyl.com/static/media/1e/f3/b4/1ef3b4525b74cb727349c507c9611802fc451690995ca07bacf80998229a290b.jpg",
      "https://i.pinimg.com/originals/dd/3c/19/dd3c199ddfb447fd0fb697e5c41d523e.png",
      "https://m.media-amazon.com/images/M/MV5BODcxMzVhMzEtYTNiNS00MTcxLThjYTMtNDhlNjY1OWJkYWJhXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg"],
    [300, 200, 250],
    [100, 50, 75],
    "The Beast",
    "ipfs://QmRnhnbLeZP2sGA3tewitFSz2uN7XnQqHjL24wUx9yxCEr",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  console.log("Done deploying and minting!");
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
