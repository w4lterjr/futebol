import React from 'react';
import './App.css';

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
  // Adicione outros times conforme necessário
];

function App() {
  return (
    <div className="App">
      <h1>Brasileirao</h1>
      <table className="classificacao">
        <thead>
          <tr>
            <th>Posição</th>
            <th>Time</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((time) => (
            <tr key={time.posicao}>
              <td>{time.posicao}</td>
              <td>{time.time}</td>
              <td>{time.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
