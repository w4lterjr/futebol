import React from 'react';
import styles from '../styles/brasileirao.module.css';

const classificacao = [
  { posicao: 1, time: "Palmeiras", pontos: 75, vitorias: 23, saldoGols: 35, golsMarcados: 67, confrontoDireto: "V", cartoes: 45 },
  { posicao: 2, time: "Flamengo", pontos: 70, vitorias: 22, saldoGols: 30, golsMarcados: 65, confrontoDireto: "V", cartoes: 40 },
  { posicao: 3, time: "Atlético-MG", pontos: 68, vitorias: 21, saldoGols: 28, golsMarcados: 60, confrontoDireto: "D", cartoes: 50 },
  { posicao: 4, time: "Fluminense", pontos: 64, vitorias: 19, saldoGols: 20, golsMarcados: 58, confrontoDireto: "E", cartoes: 38 },
  { posicao: 5, time: "Internacional", pontos: 62, vitorias: 18, saldoGols: 18, golsMarcados: 55, confrontoDireto: "V", cartoes: 42 },
  { posicao: 6, time: "São Paulo", pontos: 60, vitorias: 17, saldoGols: 15, golsMarcados: 52, confrontoDireto: "D", cartoes: 41 },
  { posicao: 7, time: "Corinthians", pontos: 59, vitorias: 17, saldoGols: 10, golsMarcados: 50, confrontoDireto: "V", cartoes: 39 },
  { posicao: 8, time: "Athletico-PR", pontos: 58, vitorias: 16, saldoGols: 12, golsMarcados: 53, confrontoDireto: "E", cartoes: 37 },
  { posicao: 9, time: "Fortaleza", pontos: 55, vitorias: 15, saldoGols: 5, golsMarcados: 48, confrontoDireto: "D", cartoes: 43 },
  { posicao: 10, time: "Botafogo", pontos: 52, vitorias: 14, saldoGols: 3, golsMarcados: 46, confrontoDireto: "V", cartoes: 44 },
  { posicao: 11, time: "Vasco da Gama", pontos: 50, vitorias: 13, saldoGols: -1, golsMarcados: 47, confrontoDireto: "E", cartoes: 49 },
  { posicao: 12, time: "Santos", pontos: 48, vitorias: 12, saldoGols: -3, golsMarcados: 45, confrontoDireto: "D", cartoes: 46 },
  { posicao: 13, time: "Grêmio", pontos: 46, vitorias: 11, saldoGols: -5, golsMarcados: 42, confrontoDireto: "E", cartoes: 50 },
  { posicao: 14, time: "Ceará", pontos: 45, vitorias: 10, saldoGols: -7, golsMarcados: 40, confrontoDireto: "D", cartoes: 51 },
  { posicao: 15, time: "Cruzeiro", pontos: 43, vitorias: 9, saldoGols: -8, golsMarcados: 38, confrontoDireto: "V", cartoes: 52 },
  { posicao: 16, time: "América-MG", pontos: 42, vitorias: 8, saldoGols: -10, golsMarcados: 35, confrontoDireto: "E", cartoes: 55 },
  { posicao: 17, time: "Bahia", pontos: 40, vitorias: 7, saldoGols: -12, golsMarcados: 34, confrontoDireto: "D", cartoes: 60 },
  { posicao: 18, time: "Goiás", pontos: 39, vitorias: 6, saldoGols: -14, golsMarcados: 32, confrontoDireto: "V", cartoes: 61 },
  { posicao: 19, time: "Coritiba", pontos: 37, vitorias: 5, saldoGols: -16, golsMarcados: 30, confrontoDireto: "E", cartoes: 62 },
  { posicao: 20, time: "Atlético-GO", pontos: 35, vitorias: 4, saldoGols: -18, golsMarcados: 28, confrontoDireto: "D", cartoes: 65 },
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
            <th><i>Vitorias</i></th>
            <th><i>Saldo de gols</i></th>
            <th><i>Gols Marcados</i></th>
            <th><i>Confronto direto</i></th>
            <th><i>Numero de cartoes</i></th>
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
                <td><i>{time.vitorias}</i></td> {/* Vitorias em itálico */}
                <td><i>{time.saldoGols}</i></td> {/* Saldo de gols em itálico */}
                <td><i>{time.golsMarcados}</i></td> {/* Gols Marcados em itálico */}
                <td><i>{time.confrontoDireto}</i></td> {/* Confronto Direto em itálico */}
                <td><i>{time.cartoes}</i></td> {/* Cartões em itálico */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
