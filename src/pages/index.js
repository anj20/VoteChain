import { useState, useEffect, useContext } from "react";
import Image from 'next/image';

import { VotingContext } from "../../context/Voter";
import Style from "@/styles/index.module.css";
import Card from "@components/Card/Card";
import Link from "next/link";
const useCurrentTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return dateTime;
};

const Home = () => {
  const {
    getNewCandidate,
    candidateArray,
    giveVote,
    currentAccount,
    voterLength,
    candidateLength,
    getAllVoterData,
  } = useContext(VotingContext);
  useEffect(() => {
    getNewCandidate();
    getAllVoterData();
  }, []);
  const dateTime = useCurrentTime();
  const formattedDateTime = dateTime.toLocaleTimeString();
  return (
    <div className={Style.home}>
      {currentAccount && (
        <div className={Style.winner}>
          <div className={Style.winner_info}>
            <div className={Style.candidate_list}>
              <Link href={{ pathname: "/" }}>
                <p>
                  No Candidate: <span>{candidateLength}</span>
                </p>
              </Link>
            </div>
            <div className={Style.candidate_list}>
              <Link href={{ pathname: "/voterList" }}>
                <p>
                  No Voter: <span>{voterLength}</span>
                </p>
              </Link>
            </div>
          </div>
          <div className={Style.winner_message}>
            <small>
              <p>{formattedDateTime}</p>
            </small>
          </div>
        </div>
      )}
      <div className={Style.title}>Candidates</div>
      <Card candidateArray={candidateArray} giveVote={giveVote} />
      <footer className={Style.footer}>
        <div className={Style.imageContainer}>
          <Image src="/blockscout.jpeg" alt="Footer Image 1" width={100} height={100} />
          <Image src="/conduitimg.png" alt="Footer Image 2" width={100} height={100} />
          <Image src="/opstack.png" alt="Footer Image 3" width={100} height={100} />
          <Image src="/pythNetwork.png" alt="Footer Image 4" width={100} height={100} />
          <Image src="/tenderly.png" alt="Footer Image 5" width={100} height={100} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
