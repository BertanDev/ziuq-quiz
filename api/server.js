import express from 'express'
import cors from 'cors'

const app = express();
const port = 3333;
app.use(cors())

const questions = [
    {
        id: 1,
        question: "Em que ano começou a Segunda Guerra Mundial?",
        alternatives: {
          a: "1939",
          b: "1941",
          c: "1945",
          d: "1938",
        },
        correctAlternative: "a",
      },
    
      {
        id: 2,
        question: "Qual é o maior planeta do sistema solar?",
        alternatives: {
          a: "Marte",
          b: "Júpiter",
          c: "Terra",
          d: "Vênus",
        },
        correctAlternative: "b",
      },
    
      {
        id: 3,
        question: "Qual é a capital da França?",
        alternatives: {
          a: "Londres",
          b: "Paris",
          c: "Roma",
          d: "Berlim",
        },
        correctAlternative: "b",
      },
    
      {
        id: 4,
        question: "Quem é o criador da teoria da relatividade?",
        alternatives: {
          a: "Isaac Newton",
          b: "Albert Einstein",
          c: "Stephen Hawking",
          d: "Nikola Tesla",
        },
        correctAlternative: "b",
      },
    
      {
        id: 5,
        question: "Qual é o maior oceano do mundo?",
        alternatives: {
          a: "Atlântico",
          b: "Pacífico",
          c: "Ártico",
          d: "Antártico",
        },
        correctAlternative: "b",
      },
    
      {
        id: 6,
        question: "Quem pintou a Mona Lisa?",
        alternatives: {
          a: "Leonardo da Vinci",
          b: "Michelangelo",
          c: "Rafael",
          d: "Rembrandt",
        },
        correctAlternative: "a",
      },
    
      {
        id: 7,
        question: "Quantos estados tem os Estados Unidos?",
        alternatives: {
          a: "50",
          b: "40",
          c: "60",
          d: "30",
        },
        correctAlternative: "a",
      },
    
      {
        id: 8,
        question: "Qual é a capital do Brasil?",
        alternatives: {
          a: "São Paulo",
          b: "Rio de Janeiro",
          c: "Belo Horizonte",
          d: "Brasília",
        },
        correctAlternative: "d",
      },
    
      {
        id: 9,
        question: "Qual é a moeda oficial do Japão?",
        alternatives: {
          a: "Dólar",
          b: "Euro",
          c: "Iene",
          d: "Libra Esterlina",
        },
        correctAlternative: "c",
      },
    
      {
        id: 10,
        question: "Quem descobriu o Brasil?",
        alternatives: {
          a: "Cristóvão Colombo",
          b: "Pedro Álvares Cabral",
          c: "Vasco da Gama",
          d: "Ferdinand Magellan",
        },
        correctAlternative: "b",
      },
    
      {
        id: 11,
        question: "Qual é a capital do Japão?",
        alternatives: {
          a: "Seul",
          b: "Tóquio",
          c: "Xangai",
          d: "Bangkok",
        },
        correctAlternative: "b",
      },
    
      {
        id: 12,
        question: "Qual é a maior cordilheira do mundo?",
        alternatives: {
          a: "Andes",
          b: "Alpes",
          c: "Himalaia",
          d: "Rockies",
        },
        correctAlternative: "c",
      },
      
      {
        id: 13,
        question: "Qual é o planeta mais próximo do Sol?",
        alternatives: {
          a: "Terra",
          b: "Marte",
          c: "Vênus",
          d: "Mercúrio",
        },
        correctAlternative: "d",
      },
      
      {
        id: 14,
        question: "Quantos estados tem o Brasil?",
        alternatives: {
          a: "26",
          b: "27",
          c: "28",
          d: "29",
        },
        correctAlternative: "b",
      },
    
      {
        id: 15,
        question: "Quantos jogadores tem em cada time de hóquei no gelo?",
        alternatives: {
          a: "5",
          b: "6",
          c: "7",
          d: "11",
        },
        correctAlternative: "b",
      },
    
      {
        id: 16,
        question: "Qual é o time de futebol com mais títulos da Liga dos Campeões da UEFA?",
        alternatives: {
          a: "Barcelona",
          b: "Real Madrid",
          c: "Manchester United",
          d: "Bayern de Munique",
        },
        correctAlternative: "b",
      },
      
      {
        id: 17,
        question: "Quem é considerado o melhor jogador de basquete de todos os tempos?",
        alternatives: {
          a: "Michael Jordan",
          b: "Lebron James",
          c: "Kareem Abdul-Jabbar",
          d: "Magic Johnson",
        },
        correctAlternative: "a",
      },
      
      {
        id: 18,
        question: "Qual é o esporte mais popular do mundo?",
        alternatives: {
          a: "Futebol",
          b: "Basquete",
          c: "Cricket",
          d: "Vôlei",
        },
        correctAlternative: "a",
      },
      
      {
        id: 19,
        question: "Em qual país foi realizada a primeira Olimpíada moderna?",
        alternatives: {
          a: "Grécia",
          b: "França",
          c: "Itália",
          d: "Estados Unidos",
        },
        correctAlternative: "a",
      },
      
      {
        id: 21,
        question: "Qual é o filme mais lucrativo de todos os tempos?",
        alternatives: {
          a: "Avatar",
          b: "Titanic",
          c: "Star Wars: O Império Contra-Ataca",
          d: "Vingadores: Ultimato",
        },
        correctAlternative: "a",
      },
      
      {
        id: 22,
        question: "Quem é o diretor de O Poderoso Chefão?",
        alternatives: {
          a: "Martin Scorsese",
          b: "Francis Ford Coppola",
          c: "Quentin Tarantino",
          d: "Stanley Kubrick",
        },
        correctAlternative: "b",
      },
      
      {
        id: 23,
        question: "Qual ator venceu o Oscar de Melhor Ator pela sua performance em Forrest Gump?",
        alternatives: {
          a: "Tom Hanks",
          b: "Jim Carrey",
          c: "Robin Williams",
          d: "Tom Cruise",
        },
        correctAlternative: "a",
      },
      
      {
        id: 24,
        question: "Quem é o personagem principal de O Senhor dos Anéis?",
        alternatives: {
          a: "Gandalf",
          b: "Legolas",
          c: "Frodo Bolseiro",
          d: "Aragorn",
        },
        correctAlternative: "c",
      },
      
      {
        id: 25,
        question: "Em que ano foi lançado o primeiro filme da franquia Star Wars?",
        alternatives: {
          a: "1977",
          b: "1980",
          c: "1983",
          d: "1986",
        },
        correctAlternative: "a",
      },
    
      {
        id: 31,
        question: "Qual é o animal mais rápido do mundo terrestre?",
        alternatives: {
          a: "Leopardo",
          b: "Guepardo",
          c: "Jaguar",
          d: "Tigre",
        },
        correctAlternative: "b",
      },
      
      {
        id: 32,
        question: "Qual é a maior espécie de réptil do mundo?",
        alternatives: {
          a: "Crocodilo",
          b: "Jabuti",
          c: "Anaconda Verde",
          d: "Tartaruga Marinha",
        },
        correctAlternative: "c",
      },
      
      {
        id: 33,
        question: "De que cor é a espécie de flamingo conhecido como Flamingo-Rosa?",
        alternatives: {
          a: "Rosa",
          b: "Laranja",
          c: "Verde",
          d: "Branco",
        },
        correctAlternative: "a",
      },
      
      {
        id: 34,
        question: "Qual é a principal fonte de alimento da baleia-azul?",
        alternatives: {
          a: "Peixes",
          b: "Krill",
          c: "Plâncton",
          d: "Algas",
        },
        correctAlternative: "b",
      },
      
      {
        id: 35,
        question: "Qual é a espécie de macaco mais conhecida por ter rabo prensil?",
        alternatives: {
          a: "Macaco-Prego",
          b: "Macaco-Narigudo",
          c: "Macaco-De-Cheiro",
          d: "Macaco-De-Capuchinho",
        },
        correctAlternative: "d",
      },
];

app.get('/questions', (req, res) => {
  const randomQuestions = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    while (randomQuestions.indexOf(questions[randomIndex]) !== -1) {
      randomIndex = Math.floor(Math.random() * questions.length);
    }
    randomQuestions.push(questions[randomIndex]);
}
  res.json(randomQuestions);
  console.log(randomQuestions)
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});