// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Substitua com a sua chave da Alpha Vantage
  const API_KEY = 'JP6LD99KF6S3VMAV';
  const SYMBOL = 'WTI'; // WTI é o petróleo West Texas Intermediate

  useEffect(() => {
    const fetchPetroleoPrice = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`
        );
        
        const data = response.data["Time Series (Daily)"];
        const latestDate = Object.keys(data)[0];
        const latestPrice = data[latestDate]["4. close"];
        
        setPrice(latestPrice);
        setLoading(false);
      } catch (err) {
        setError('Erro ao buscar os dados.');
        setLoading(false);
      }
    };

    fetchPetroleoPrice();
  }, []);

  return (
    <div className="App">
      <h1>Cotação do Petróleo</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {price && <p>Preço do Petróleo (WTI): ${price}</p>}
    </div>
  );
}

export default App;
