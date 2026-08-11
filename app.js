// Função de Saudação
function saudacao(nome) {
    if (!nome || nome.trim() === "") {
        throw new Error("Nome não pode estar vazio");
    }
    return `Olá, ${nome}! Bem-vindo...`;
}

// Função de Calcular
function calcular(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    }
    if (operacao === 'divisao') {
        if (b === 0) {
            throw new Error("Divisão por zero...");
        }
        return a / b;
    }
    return 0;
}

// Exportando as funções para o arquivo de teste conseguir ler
module.exports = { saudacao, calcular };
