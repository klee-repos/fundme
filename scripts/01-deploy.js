const { ethers } = require("hardhat");
require("dotenv").config;
const { CHAINLINK_CONTRACT } = process.env;

const deploy = async () => {
  const FundMe = await ethers.getContractFactory("FundMe");
  const deployResults = await FundMe.deploy(CHAINLINK_CONTRACT);
  console.log("Contract deployed to address:", deployResults.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
