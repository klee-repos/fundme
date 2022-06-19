const DECIMALS = "10";
const INITIAL_PRICE = "1";

const deploy = async () => {
  const MockV3Aggregator = await ethers.getContractFactory("MockV3Aggregator");
  const deployResults = await MockV3Aggregator.deploy(DECIMALS, INITIAL_PRICE);
  console.log("Contract deployed to address:", deployResults.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
