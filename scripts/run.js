const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Finn the Human", "Jake the Dog", "Lumpy Space Princess"],
    ["http://img10.deviantart.net/5544/i/2012/293/3/4/finn_the_human_by_bourrouet-d5iends.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/015a0c42674403.57d33bf58606e.jpg",
      "https://i.pinimg.com/originals/48/85/94/4885940273a163768769e85d1312d996.jpg"],
    [100, 200, 1000],
    [100, 50, 10],
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
