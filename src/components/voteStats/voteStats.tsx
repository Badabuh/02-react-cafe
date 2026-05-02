import styles from "./voteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsData extends Votes {
  total: number;
  positivePercentage: number;
}

interface VoteStatsProps {
  stats: VoteStatsData;
}

export default function VoteStats({ stats }: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{stats.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{stats.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{stats.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{stats.total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{stats.positivePercentage.toFixed(0)}%</strong>
      </p>
    </div>
  );
}
