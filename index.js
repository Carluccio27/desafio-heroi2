// Função principal do desafio
function desafioDoHeroi() {
    // Variáveis para armazenar o nome e a experiência (XP) do herói
    let nomeHeroi = prompt("Digite o nome do herói:");
    let xpHeroi = Number(prompt("Digite a quantidade de experiência (XP) do herói:"));

    // Estrutura de decisão para determinar o nível do herói
    let nivel;

    if (xpHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata Ouro";
    } else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
        nivel = "Platina Diamante";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else if (xpHeroi >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Nível desconhecido"; // Caso o XP seja inválido
    }

    // Exibir o resultado
    alert(`O Herói de nome **${nomeHeroi}** está no nível **${nivel}**!`);
}

// Executar o desafio
desafioDoHeroi();
