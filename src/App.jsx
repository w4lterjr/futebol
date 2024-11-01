import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Brasileirao = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      let isMounted = true; // track mounted state

      const fetchData = async () => {
          try {
              const response = await axios.get('https://api.football-data.org/v2/competitions/BRA/teams', {
                  headers: {
                      'X-Auth-Token': '9c58ca0dcc864d889351f2daeff19619' // Use environment variable
                  }
              });
              if (isMounted) {
                  setTimes(response.data.teams);
              }
          } catch (error) {
              if (isMounted) {
                  console.error('Error fetching data:', error);
                  setError('Erro ao carregar os times.');
              }
          } finally {
              if (isMounted) {
                  setLoading(false);
              }
          }
      };

      fetchData();

      return () => {
          isMounted = false; // cleanup function to prevent memory leaks
      };
  }, []);

  if (loading) {
      return <div>Carregando...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  return (
      <div>
          <h1>Brasileirão</h1>
          <ul>
              {times.map((time) => (
                  <li key={time.id}>{time.name}</li>
              ))}
          </ul>
      </div>
  );
};

export default Brasileirao;
