import voting from "./VotingContract.json";

export const VotingAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
export const VotingAbi = voting.abi;
