import React from 'react';
import styles from '../styles/brasileirao.module.css';

const classificacao = [
  { posicao: 1, time: "Palmeiras", pontos: 75 },
  { posicao: 2, time: "Flamengo", pontos: 70 },
  { posicao: 3, time: "Atlético-MG", pontos: 68 },
  { posicao: 4, time: "Fluminense", pontos: 64 },
  { posicao: 5, time: "Internacional", pontos: 62 },
  { posicao: 6, time: "São Paulo", pontos: 60 },
  { posicao: 7, time: "Corinthians", pontos: 59 },
  { posicao: 8, time: "Athletico-PR", pontos: 58 },
  { posicao: 9, time: "Fortaleza", pontos: 55 },
  { posicao: 10, time: "Botafogo", pontos: 52 },
  { posicao: 11, time: "Vasco da Gama", pontos: 50 },
  { posicao: 12, time: "Santos", pontos: 48 },
  { posicao: 13, time: "Grêmio", pontos: 46 },
  { posicao: 14, time: "Ceará", pontos: 45 },
  { posicao: 15, time: "Cruzeiro", pontos: 43 },
  { posicao: 16, time: "América-MG", pontos: 42 },
  { posicao: 17, time: "Bahia", pontos: 40 },
  { posicao: 18, time: "Goiás", pontos: 39 },
  { posicao: 19, time: "Coritiba", pontos: 37 },
  { posicao: 20, time: "Atlético-GO", pontos: 35 },
];

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Classificação do Campeonato Brasileiro</h1>
      <table className={styles.classificacao}>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Time</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((time) => {
            let className = '';

            // Se for o primeiro time, aplica a classe 'firstPlace'
            if (time.posicao === 1) {
              className = styles.firstPlace; // Azul-dourado para o primeiro
            } else if (time.posicao <= 4) {
              className = styles.topFour; // Azul para os 4 primeiros
            } else if (time.posicao >= 17) {
              className = styles.bottomFour; // Vermelho para os 4 últimos
            } else {
              className = styles.middle; // Verde para o meio
            }

            return (
              <tr key={time.posicao} className={className}>
                <td>{time.posicao}</td>
                <td>{time.time}</td>
                <td>{time.pontos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
