// pages/index.js ou no seu componente React
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usando o símbolo Brent Crude
  const API_KEY = "JP6LD99KF6S3VMAV";
  const SYMBOL = 'BRENT'; // Aqui é onde usamos o símbolo do Brent Crude

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
  }, [API_KEY, SYMBOL]); // Dependência do símbolo Brent

  return (
    <div className="App">
      <h1>Cotação do Petróleo Brent</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {price && <p>Preço do Petróleo (Brent): ${price}</p>}
    </div>
  );
}

export default App;
