import React, { useState, useEffect } from 'react';
import styles from '../styles/blockScout.module.css'; // Import CSS module

const blockScout = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://explorer.metall2.com/api/v2/search?q=USDC', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results</h1>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {data && (
        <div className={styles.results}>
          <pre className={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default blockScout;
