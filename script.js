
/* ===== CARROSSEL DAS LOJAS OFICIAIS ===== */

// Pega a faixa que contém as logos
const trilha = document.getElementById("trilha");

// Pega os retângulos abaixo das logos
const pontos = document.querySelectorAll(".ponto");

// Quantas logos aparecem ao mesmo tempo
const visiveis = 6;

// Quantas posições a faixa pode avançar
const ultima = trilha.children.length - visiveis;

// Guarda a posição atual
let posicao = 0;


// Move as logos e atualiza os retângulos
function mostrar() {

    // Desloca a faixa para a posição escolhida
    trilha.style.transform =
        "translateX(-" + posicao * (100 / trilha.children.length) + "%)";

    // Deixa o retângulo da posição atual laranja
    pontos.forEach(function(ponto, i) {
        ponto.classList.toggle("ativo", i === posicao);
    });
}


// Botão para voltar as logos
document.getElementById("anterior").onclick = function() {

    if (posicao > 0) {
        posicao--;
    }

    mostrar();
};


// Botão para avançar as logos
document.getElementById("proximo").onclick = function() {

    if (posicao < ultima) {
        posicao++;
    }

    mostrar();
};


// Permite clicar nos retângulos para mudar a posição
pontos.forEach(function(ponto, i) {

    ponto.onclick = function() {
        posicao = i;
        mostrar();
    };

});


// Deixa o primeiro retângulo ativo ao abrir a página
mostrar();




/* ===== CARROSSEL DOS CARROS ===== */

let posicaoCarros = 0;

function moverCarros(direcao) {
    const trilha = document.querySelector(".trilha-carros");

    if (!trilha) {
        console.log("Não encontrei .trilha-carros no HTML");
        return;
    }

    const carros = trilha.querySelectorAll(".boxcar");
    const tracos = document.querySelectorAll(".linhacar1 .traco");

    if (carros.length === 0) return;

    // Quantidade de cartões que queremos mostrar
    const visiveis = 6;

    // Última posição possível
    const ultimaPosicao = Math.max(0, carros.length - visiveis);

    // Avança ou volta um carro
    posicaoCarros += direcao;

    if (posicaoCarros < 0) {
        posicaoCarros = 0;
    }

    if (posicaoCarros > ultimaPosicao) {
        posicaoCarros = ultimaPosicao;
    }

    // Calcula o deslocamento usando o tamanho real do cartão
    const estilo = getComputedStyle(trilha);
    const espaco = parseFloat(estilo.gap) || 0;
    const largura = carros[0].getBoundingClientRect().width + espaco;

    trilha.style.transform =
        `translateX(-${posicaoCarros * largura}px)`;

    // Atualiza os retângulos
    tracos.forEach(function(traco, indice) {
        traco.classList.toggle("ativo", indice === posicaoCarros);
    });
}   