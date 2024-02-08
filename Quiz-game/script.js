const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'let' em JavaScript?",
      respostas: [
        "Declarar uma constante.",
        "Declarar uma variável local.",
        "Declarar uma variável global."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'hoisting' em JavaScript?",
      respostas: [
        "Um tipo de loop.",
        "O processo de mover declarações para o topo do escopo.",
        "Uma função de manipulação de strings."
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que avalia uma expressão e executa um bloco de código se a expressão for verdadeira?",
      respostas: [
        "If",
        "Switch",
        "While"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um formato de arquivo.",
        "A linguagem de programação padrão do navegador.",
        "A representação do documento como uma árvore de objetos."
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console?",
      respostas: [
        "logMessage()",
        "displayText()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma arrow function em JavaScript?",
      respostas: [
        "Uma função que retorna sempre 'true'.",
        "Uma função com sintaxe mais curta e lexical 'this'.",
        "Uma função exclusiva para manipulação de arrays."
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara um array em JavaScript?",
      respostas: [
        "let myArray = []",
        "array = []",
        "new Array()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Um tipo de erro de execução.",
        "Uma função passada como argumento para outra função.",
        "Um método para realizar operações de chamada em strings."
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de manipulação de objetos.",
        "Uma biblioteca para gráficos 3D.",
        "Um formato de dados leve e independente de linguagem."
      ],
      correta: 2
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