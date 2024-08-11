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
        var data = await response.json();
        data =JSON.stringify(data,null,2);
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
      <h1 className={styles.title}>Latest Price Updates BTC/USD and ETH/USD</h1>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {prices && (
        <div className={styles.results}>
          <pre>{prices}</pre>
        </div>
      )}

      {/* {prices.parsed.length > 0 && (
        <div className={styles.results}>
          {prices.parsed.map((priceData) => (
            <div key={priceData.id} className={styles.priceData}>
              <h2>Price Feed ID: {priceData.id}</h2>
              <p><strong>Price:</strong> {priceData.price.price}</p>
              <p><strong>EMA Price:</strong> {priceData.ema_price.price}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default PricePage;
