# Superchain App Quick Start Guide

Welcome to the Superchain App Quick Start Guide! This document will help you deploy an app to any OP Chain in under 15 minutes. By following these straightforward steps, you'll use Scaffold-OP to build your Superchain App and access detailed resources for deeper exploration.

## Table of Contents

- [Superchain App Quick Start Guide](#superchain-app-quick-start-guide)
  - [Table of Contents](#table-of-contents)
  - [Step 1: Acquire Testnet ETH from the Superchain Faucet](#step-1-acquire-testnet-eth-from-the-superchain-faucet)
  - [Step 2: Develop a Basic Application with Scaffold-OP](#step-2-develop-a-basic-application-with-scaffold-op)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository \& Install Dependencies](#clone-the-repository--install-dependencies)
- [Local Ethereum Network and Application Setup](#local-ethereum-network-and-application-setup)
  - [Start a Local Network](#start-a-local-network)
  - [Deploy the Test Contract](#deploy-the-test-contract)
  - [Launch Your NextJS Application](#launch-your-nextjs-application)
  - [Running Smart Contract Tests](#running-smart-contract-tests)
  - [Deploy Contracts to Superchain Testnets](#deploy-contracts-to-superchain-testnets)
    - [Configure the .env File](#configure-the-env-file)
    - [Set Environment Variables](#set-environment-variables)
    - [Deploy Smart Contracts](#deploy-smart-contracts)

## Step 1: Acquire Testnet ETH from the Superchain Faucet

To deploy your application, you'll need testnet ETH on OP Sepolia to cover gas fees. Obtain free ETH using the Optimism Superchain Faucet. You have two methods:

1. **Wallet Connection**: Connect a wallet with an Optimist NFT to receive up to 1 testnet ETH per network every 24 hours.
2. **GitHub Login**: Log in with GitHub to receive up to 0.05 testnet ETH daily.

For additional testnet ETH, explore other available OP Sepolia faucets.

## Step 2: Develop a Basic Application with Scaffold-OP

Scaffold-OP is an enhanced version of scaffold-ETH2, featuring additional app examples, native support for Superchain testnets, and comprehensive instructions. It is an open-source toolkit that simplifies the development and deployment of decentralized applications on the Ethereum blockchain.

### Prerequisites

Ensure the following tools are installed:

- Node.js v18.17 or higher
- Yarn v1 or v2+
- Git

### Clone the Repository & Install Dependencies


git clone https://github.com/ethereum-optimism/scaffold-op.git
cd scaffold-op
yarn install

# Local Ethereum Network and Application Setup

## Start a Local Network

1. In the first terminal, initialize a local Ethereum network:
    ```bash
    yarn chain
    ```
   This command starts a local Ethereum network using Hardhat. The network runs on your local machine and is used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

## Deploy the Test Contract

2. In the second terminal, deploy the smart contract:
    ```bash
    yarn deploy
    ```
   The test contract is located in `packages/hardhat/contracts`. Modify it according to your needs. For adding new contracts, update the deployment script in `packages/hardhat/deploy`.

## Launch Your NextJS Application

3. In the second terminal, start the NextJS app:
    ```bash
    yarn start
    ```
   Visit your app at [http://localhost:3000](http://localhost:3000). You can interact with your smart contract using the Debug Contracts page. Modify the app configuration in `packages/nextjs/scaffold.config.ts`.

## Running Smart Contract Tests

4. Execute smart contract tests with:
    ```bash
    yarn hardhat:test
    ```

   Update the following files as needed:
   - Smart Contract: `YourContract.sol` in `packages/hardhat/contracts`
   - Frontend: `packages/nextjs/pages`
   - Deployment Scripts: `packages/hardhat/deploy`

## Deploy Contracts to Superchain Testnets

5. Ensure you have enough Sepolia ETH before deploying to a remote testnet (e.g., Optimism Sepolia) (refer to Step 1).

### Configure the .env File

6. In the `packages/hardhat` directory, create a `.env` file:
    ```bash
    cd packages/hardhat && cp .env.example .env
    ```

### Set Environment Variables

7. Edit `.env` to include:
    ```plaintext
    DEPLOYER_PRIVATE_KEY = "your_private_key_with_sepolia_ETH"
    ```
   Ensure that the address linked to this private key has sufficient Sepolia ETH.

### Deploy Smart Contracts

8. Deploy contracts to the chosen network(s) by executing:
    ```bash
    yarn deploy --network-options
    ```
   Select network options using the spacebar. Successful deployments will show transaction hashes in the terminal.
