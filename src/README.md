# The Graph and Virtual TestNets Creations

To use The Graph with Virtual TestNets, you need to run your own Graph node. For staging your dapp, ensure that The Graph instance is hosted on your chosen cloud provider.

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js and npm
- Docker
- A Tenderly account
- A Virtual TestNet RPC
- A smart contract deployed to Virtual TestNet using Hardhat or Foundry

## Setting Up The Graph

### Install Graph CLI Globally

Install the Graph CLI globally on your system using npm:

```bash
npm install -g @graphprotocol/graph-cli
```

For more details, refer to the [official Graph CLI documentation](https://thegraph.com/docs/).

### Set Up The Graph Project

Inside your project directory, initialize The Graph project:

```bash
graph init subgr subgr-dir \
--protocol ethereum \
--studio \
--abi /Users/anj20/Documents/Development/BlockVoteChain-voting/artifacts/contracts/VotingContract.sol/VotingContract.json \
--contract-name Create \
--from-contract 0xAA55006d994B35E83D9d913074fD5e37d5b5d23E \
--start-block 0 \
--network mainnet

```

**Notes:**

- Adapt `--abi` to point to the contract ABI on your local system.
- Modify `--contract-name` and `--from-contract` with your contract's name and address.
- Set `--start-block` to the appropriate block number.
- Ensure `--network` references the network your Virtual TestNet is based on (e.g., mainnet, base, etc.). We recommend naming the network similarly to avoid confusion when switching RPCs.

Refer to the [Graph Initialization documentation](https://thegraph.com/docs/).

### Update `docker-compose.yml`

Edit the `docker-compose.yml` file and update `environment.ethereum` to refer to the Virtual TestNet RPC:

```yaml
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node
    ports:
      - '8020:8020'
      - '8000:8000'
      - '5001:5001'
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'mainnet:https://virtual.mainnet.rpc.tenderly.co/70c7861d-2eb0-41c8-9bc0-e7f68425ce09'
```

Refer to the [Graph Docker documentation](https://thegraph.com/docs/).

### Run Docker Compose Locally

After updating the `docker-compose` config, start the services with:

```bash
docker-compose up
```

### Create and Deploy Your Subgraph

Run the following commands to create and deploy your subgraph:

```bash
graph codegen
graph create --node http://localhost:8020 subgr
graph deploy --node http://localhost:8020 --ipfs http://localhost:5001 subgr
```

Refer to the [Graph Deployment documentation](https://thegraph.com/docs/).

### Access the Subgraph

After deployment, access your subgraph through the following URL. Open this URL in your browser to run queries:

```
http://localhost:8000/subgraphs/name/subgr
```

Refer to the [Graph Query documentation](https://thegraph.com/docs/).

## Deploy to Cloud

For dapp staging, deploy The Graph node to your cloud provider of choice. Connect your dapp UI/backend to that node for querying.