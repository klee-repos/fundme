const { ethers } = require("hardhat");
require("dotenv").config;
const { RPC_SERVER, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const FundMe = require("../artifacts/contracts/FundMe.sol/FundMe.json");

const withdrawFunds = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_SERVER);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  console.log(wallet);
  const abi = new ethers.Contract(CONTRACT_ADDRESS, FundMe.abi, wallet);

  let txFund = await abi.withdraw();
  await txFund.wait();
  console.log(txFund);
};

withdrawFunds()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
