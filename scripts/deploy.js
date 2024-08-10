const hre = require("hardhat");
async function main() {
  const VotingContract = await hre.ethers.getContractFactory("VotingContract");
  const votingContract = await VotingContract.deploy();
  await votingContract.waitForDeployment();
  console.log(`Voting Contract deployed to ${votingContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
