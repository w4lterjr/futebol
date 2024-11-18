import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [goldPrice, setGoldPrice] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "DB733HKBEESQB8KO";  // Substitua pela sua chave da Alpha Vantage

  useEffect(() => {
    // Função para buscar o preço do ouro (XAU/USD)
    const fetchGoldPrice = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: "XAUUSD", // Ouro em relação ao dólar
            interval: "1day",
            apikey: API_KEY,
          },
        });

        const latestGoldData = response.data["Time Series (Daily)"];
        if (latestGoldData) {
          const latestDate = Object.keys(latestGoldData)[0]; // Última data disponível
          const price = latestGoldData[latestDate]["4. close"];
          setGoldPrice(price); // Armazenar o preço do ouro
        }
      } catch (error) {
        setError("Erro ao buscar dados de ouro.");
      }
    };

    // Chamar a função para pegar o preço do ouro
    fetchGoldPrice();
  }, []);

  return (
    <div className="App">
      <h1>Preço do Ouro (XAU/USD)</h1>
      {error && <p>{error}</p>}
      <div>
        {goldPrice ? <p>${goldPrice}</p> : <p>Carregando...</p>}
      </div>
    </div>
  );
};

export default App;
