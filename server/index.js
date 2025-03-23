const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API de Scorecards funcionando!');
});

app.get('/scorecards', (req, res) => {
  const dummyData = [
    {
      name: 'Eficiência Operacional',
      description: 'Monitoramento do uso dos recursos nas unidades',
      unit: 'Planta A'
    },
    {
      name: 'Segurança do Trabalho',
      description: 'Indicadores de segurança e incidentes',
      unit: 'Planta B'
    },
    {
      name: 'Sustentabilidade',
      description: 'Controle de emissão e reaproveitamento de materiais',
      unit: 'Planta A'
    },
    {
      name: 'Performance Financeira',
      description: 'Desempenho de custos e receitas por área',
      unit: 'Planta C'
    }
  ];

  res.json(dummyData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

