import React, { useState } from 'react';
import Web3 from 'web3';
import EntropyAbi from '@pythnetwork/entropy-sdk-solidity/abis/IEntropy.json';
import styles from "../styles/randomGenerator.module.css";

const randomGenerator = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFlip = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const web3 = new Web3(process.env.NEXT_PUBLIC_RPC_URL);
      const accounts = await web3.eth.getAccounts();
      const entropyContract = new web3.eth.Contract(
        EntropyAbi,
        process.env.NEXT_PUBLIC_ENTROPY_ADDRESS
      );
      const userRandomNumber = web3.utils.randomHex(32);
      const fee = await entropyContract.methods.getFee(process.env.NEXT_PUBLIC_PROVIDER_ADDRESS).call();
      const requestReceipt = await coinFlipContract.methods
        .request(userRandomNumber)
        .send({
          value: fee,
          from: accounts[0],
        });
    //   const sequenceNumber = requestReceipt.events.FlipRequested.returnValues.sequenceNumber;
    //   let fromBlock = requestReceipt.blockNumber;
    //   const intervalId = setInterval(async () => {
    //     const currentBlock = await web3.eth.getBlockNumber();

    //     if (fromBlock > currentBlock) {
    //       return;
    //     }
    //     const events = await coinFlipContract.getPastEvents('FlipResult', {
    //       fromBlock: fromBlock,
    //       toBlock: currentBlock,
    //     });
    //     fromBlock = currentBlock + 1;
    //     const event = events.find(event => event.returnValues.sequenceNumber === sequenceNumber);

    //     if (event !== undefined) {
    //       setResult(event.returnValues.isHeads ? 'Heads' : 'Tails');
    //       clearInterval(intervalId);
    //       setLoading(false);
    //     }
    //   }, 1000);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleGenerateClick = async () => {
    const number = generateRandomNumber(1, 100);
    await handleFlip();
    setResult(number);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Generator</h1>
      <button className={styles.button} onClick={handleGenerateClick} disabled={loading}>
        {loading ? 'Genrating...' : 'Generate Number'}
      </button>
      {result && <p>The Number is: {result}</p>}
      {/* {error && <p className={styles.error}>{error}</p>} */}
    </div>
  );
};

export default randomGenerator;
