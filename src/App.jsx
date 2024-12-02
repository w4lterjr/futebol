import React, { useState, useEffect } from "react";

const ProximosJogosFlamengo = () => {
  const [jogos, setJogos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const API_KEY = "9c58ca0dcc864d889351f2daeff19619"; // Substitua pela sua chave de API

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        // Substitua o ID da competição para o Campeonato Brasileiro ou outra liga relevante
        const resposta = await fetch("https://api.football-data.org/v4/competitions/BL1/matches", {
          method: "GET",
          headers: {
            "X-Auth-Token": API_KEY, // Cabeçalho com a chave da API
          },
        });

        const data = await resposta.json();
        
        // Filtra os jogos do Flamengo
        const jogosFlamengo = data.matches.filter(
          (jogo) =>
            jogo.homeTeam.name === "Flamengo" || jogo.awayTeam.name === "Flamengo"
        );

        setJogos(jogosFlamengo);
        setCarregando(false);
      } catch (err) {
        setErro("Erro ao carregar os jogos");
        setCarregando(false);
      }
    };

    fetchJogos();
  }, []);

  if (carregando) {
    return <div>Carregando os próximos jogos...</div>;
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  return (
    <div>
      <h1>Próximos Jogos do Flamengo</h1>
      <ul>
        {jogos.map((jogo, index) => {
          const isFlamengoCasa = jogo.homeTeam.name === "Flamengo"; // Verifica se o Flamengo é o time da casa
          const local = isFlamengoCasa ? "Em casa" : "Fora"; // Se for o time da casa ou visitante

          return (
            <li key={index}>
              <strong>{jogo.utcDate}</strong> - {jogo.homeTeam.name} vs {jogo.awayTeam.name} ({local})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProximosJogosFlamengo;
