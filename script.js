const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Clara uma aluna de uma faculdade no Parána recebe uma proposta para participar de uma viagem, mas ela precisa fazer uma prava para ver se ela se encaixa nos objetivos dessa viagem",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Agora que Clara sabia dessa viagem se esforçaria muito para fazer essa prova, oque agregaria muito para concluir o seu trabalho da faculdade, mas ela fica pensativa sobre por onde começaria a estudar. ",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utilza, pesqisas online, como revistas onlines,blogs,vídeos e outros conteúdos da internet.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ela buscaria ajuda através dos livros da biblioteca e pesquisas em escrito  ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois que Clara definiu sua planilha de estudos, começou a se aprofundar nos assuntos que exigira nesta prova ",
        alternativas: [a?
            {
                texto: "Começar com o básico das ciências humanas",
                afirmacao: "afirmação"
            },
            {
                texto: "Começar com o básico das ciências da natureza",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Chegou o dia da prova da Clara, depois de dias estudando sobre todos os conteúdos necessários ela foi fazer o teste tão esperado",
        alternativas: [
            {
                texto: "Ela ficou muito nervosa, e quase não conseguiu passar no teste.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ela ficou tranquila com a prova pois sabia que tinha se esforçado muito nos estudos e conseguiu passar tranquilamente",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Uma semana depois, Clara recebeu o e-mail Com as mãos tremendo, Clara  o abriu. O resultado estava lá, brilhando na tela : aprovada. E então conseguiu a vaga para tão desejada da viagem, ela consegui registrar todos os dados necessários para concluir seu trabalho.",
        alternativas: [
            {
                texto: "",
                afirmacao: "afirmação"
            },
            {
                texto: "",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
