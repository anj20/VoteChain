import React, { useState, useEffect } from 'react';
import styles from '../styles/pricePage.module.css'; // Import CSS module

const PricePage = () => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://hermes.pyth.network/v2/updates/price/latest?ids%5B%5D=0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43&ids%5B%5D=0xc96458d393fe9deb7a7d63a0ac41e2898a67a7750dbd166673279e06c868df0a');
        
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Price Updates</h1>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {prices && (
        <div className={styles.results}>
          <pre>{JSON.stringify(prices, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PricePage;
