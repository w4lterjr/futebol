// src/Classificacao.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Classificacao = () => {
  const [classificacao, setClassificacao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '9c58ca0dcc864d889351f2daeff19619'; // Substitua pela sua chave de API
  const LEAGUE_ID = 71; // Campeonato Brasileiro é o ID 71 na Football-Data.org

  useEffect(() => {
    axios.get(`https://api.football-data.org/v4/competitions/${LEAGUE_ID}/standings`, {
      headers: { 'X-Auth-Token': API_KEY },
    })
      .then(response => {
        setClassificacao(response.data.standings[0].table); // A estrutura da API retorna um array dentro de 'standings'
        setLoading(false);
      })
      .catch(err => {
        setError('Erro ao carregar dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Classificação Campeonato Brasileiro</h1>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Time</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((time, index) => (
            <tr key={time.team.id}>
              <td>{index + 1}</td>
              <td>{time.team.name}</td>
              <td>{time.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classificacao;
