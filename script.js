const perguntas = [
    {
        pergunta: 'Qual é a capital do Brasil?',
        respostas: [
            'Rio de Janeiro',
            'Brasília',
            'São Paulo',
        ],
        correta: 1
    },
    {
        pergunta: 'Quantos estados compõem o Brasil?',
        respostas: [
            '25',
            '27',
            '30',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a maior floresta tropical do Brasil?',
        respostas: [
            'Floresta Amazônica',
            'Mata Atlântica',
            'Cerrado',
        ],
        correta: 0
    },
    {
        pergunta: 'Quem foi o primeiro presidente do Brasil?',
        respostas: [
            'Getúlio Vargas',
            'Juscelino Kubitschek',
            'Deodoro da Fonseca',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a moeda oficial do Brasil?',
        respostas: [
            'Peso',
            'Real',
            'Dólar',
        ],
        correta: 1
    },
    {
        pergunta: 'Em que ano o Brasil sediou a Copa do Mundo de Futebol pela última vez?',
        respostas: [
            '2006',
            '2010',
            '2014',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o nome da famosa estátua localizada no Rio de Janeiro?',
        respostas: [
            'Cristo Redentor',
            'Estátua da Liberdade',
            'Colosso de Rodes',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o prato típico brasileiro feito com feijão-preto, arroz, carne-seca, linguiça e outros ingredientes?',
        respostas: [
            'Churrasco',
            'Feijoada',
            'Coxinha',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a maior festa popular do Brasil, conhecida por suas celebrações coloridas e desfiles de escolas de samba?',
        respostas: [
            'Oktoberfest',
            'Carnaval',
            'Festa Junina',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a língua oficial do Brasil?',
        respostas: [
            'Espanhol',
            'Português',
            'Inglês',
        ],
        correta: 1
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