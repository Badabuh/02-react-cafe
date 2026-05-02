import css from "./App.module.css";
import CareInfo from "../CareInfo/careInfo";
import VoteOptions from "../VoteOptions/voteOptions";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/voteStats";
import Notification from "../Notification/notification";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const stats = {
    ...votes,
    total: totalVotes,
    positivePercentage: totalVotes ? (votes.good / totalVotes) * 100 : 0,
  };

  function handleVote(type: VoteType) {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  }
  function resetVotes() {
    setVotes(initialVotes);
  }

  return (
    <div className={css.app}>
      <CareInfo />
      <VoteOptions
        canReset={totalVotes > 0}
        onVote={handleVote}
        onReset={resetVotes}
      />
      {totalVotes === 0 && <Notification />}
      {totalVotes > 0 && <VoteStats stats={stats} />}
    </div>
  );
}
