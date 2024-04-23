// Função para adição
function adicao(num1, num2) {
    return num1 + num2;
}

// Função para subtração
function subtracao(num1, num2) {
    return num1 - num2;
}

// Função para multiplicação
function multiplicacao(num1, num2) {
    return num1 * num2;
}

// Função para divisão
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: divisão por zero.";
    }
    return num1 / num2;
}

module.exports = {adicao, subtracao, multiplicacao, divisao};