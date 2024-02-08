const perguntas = [
  {
      pergunta: 'Quem é o ator que interpreta Eleven em Stranger Things?',
      respostas: [
          'Millie Bobby Brown',
          'Finn Wolfhard',
          'Gaten Matarazzo',
      ],
      correta: 0
  },
  {
      pergunta: 'Qual é o nome da cidade onde se passa a maior parte da trama de Stranger Things?',
      respostas: [
          'Hawkins',
          'Derry',
          'Castle Rock',
      ],
      correta: 0
  },
  {
      pergunta: 'Qual é o nome do mundo alternativo em Stranger Things?',
      respostas: [
          'Mundo ao Contrário',
          'Upside Down',
          'Dark Realm',
      ],
      correta: 1
  },
  {
      pergunta: 'Qual é o nome do grupo de amigos protagonistas na série?',
      respostas: [
          'The Goonies',
          'The Losers Club',
          'The Party',
      ],
      correta: 2
  },
  {
      pergunta: 'Quem é o personagem que tem uma relação especial com o Mundo ao Contrário?',
      respostas: [
          'Mike Wheeler',
          'Will Byers',
          'Lucas Sinclair',
      ],
      correta: 1
  },
  {
      pergunta: 'Qual é o nome do laboratório responsável pelos experimentos em Stranger Things?',
      respostas: [
          'Hawkins Lab',
          'MKUltra Lab',
          'Aperture Science',
      ],
      correta: 0
  },
  {
      pergunta: 'Quem é o chefe de polícia em Hawkins?',
      respostas: [
          'Jim Hopper',
          'Steve Harrington',
          'Jonathan Byers',
      ],
      correta: 0
  },
  {
      pergunta: 'Qual é o nome do monstro que aterroriza Hawkins na primeira temporada?',
      respostas: [
          'Demogorgon',
          'Mind Flayer',
          'Shadow Monster',
      ],
      correta: 0
  },
  {
      pergunta: 'Qual é o nome da irmã de Mike Wheeler em Stranger Things?',
      respostas: [
          'Max',
          'Nancy',
          'Barb',
      ],
      correta: 0
  },
  {
      pergunta: 'Qual é o nome do shopping que se torna um ponto importante na terceira temporada?',
      respostas: [
          'Starcourt Mall',
          'Hawkins Plaza',
          'Mall of Hawkins',
      ],
      correta: 0
  }
];
  
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalPerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");

mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector('h3').textContent = item.pergunta;

        for(let resposta of item.respostas) {
            const dt = quizItem.querySelector("dl dt").cloneNode(true);

            dt.querySelector("span").textContent = resposta;
            dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item));
            dt.querySelector("input").value = item.respostas.indexOf(resposta);
            
            dt.querySelector("input").onchange = (event) => {
                const estaCorreta = event.target.value == item.correta;

                corretas.delete(item);
                if(estaCorreta) {
                    corretas.add(item);
                };

                mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;
            };

            quizItem.querySelector("dl").appendChild(dt);
        };

    quizItem.querySelector("dl dt").remove();

    quiz.appendChild(quizItem);
};