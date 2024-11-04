import React, { useEffect, useState } from 'react';

const ClassificacaoBrasileirao = () => {
    const [classificacao, setClassificacao] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClassificacao = async () => {
            const API_URL = 'https://api.api-futebol.com.br/v1/campeonatos/2/tabela';
            const API_KEY = 'live_d76b283a35308de2bde30f54c97d05'; // Substitua pela sua chave

            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                });

                if (!response.ok) throw new Error('Erro ao buscar dados!');
                const data = await response.json();
                setClassificacao(data.tabela); // A tabela geralmente está em data.tabela
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClassificacao();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Classificação do Brasileirão</h1>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Time</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {classificacao.map((time) => (
                        <tr key={time.time.id}>
                            <td>{time.posicao}</td>
                            <td>{time.time.nome}</td>
                            <td>{time.pontos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassificacaoBrasileirao;
