const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
require("dotenv").config;

describe("FundMe", async function () {
  let FundMe, FundMeFactory;
  let MockV3AggregatorFactory, MockV3Aggregator, mockV3AggregatorAddress;
  beforeEach(async function () {
    MockV3AggregatorFactory = await ethers.getContractFactory(
      "MockV3Aggregator"
    );
    MockV3Aggregator = await MockV3AggregatorFactory.deploy("10", "1");
    mockV3AggregatorAddress = MockV3Aggregator.address;
    FundMeFactory = await ethers.getContractFactory("FundMe");
    FundMe = await FundMeFactory.deploy(mockV3AggregatorAddress);
  });

  it("add funds to wallet", async function () {
    let txFund = await FundMe.fund({
      value: ethers.utils.parseEther("0.01"),
    });
    await txFund.wait();
  });

  it("withdraw", async function () {
    let txFund = await FundMe.withdraw();
    await txFund.wait();
  });
});
