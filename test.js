const { saudacao, calcular } = require('./app.js');

console.log("Iniciando bateria de testes...");

try {
    // 1. Teste Positivo de Saudação
    const resSaudacaoPositivo = saudacao("João");
    console.assert(resSaudacaoPositivo === "Olá, João! Bem-vindo...", "Erro no teste positivo de saudação");

    // 2. Teste Negativo de Saudação
    try {
        saudacao("");
        console.error("X Falhou: Devia ter dado erro para nome vazio");
        process.exit(1);
    } catch (e) {
        console.assert(e.message === "Nome não pode estar vazio", "Mensagem de erro de saudação incorreta");
    }

    // 3. Teste Positivo de Soma
    const resSoma = calcular(2, 3, "soma");
    console.assert(resSoma === 5, `X Falhou: Esperava 5 mas recebeu ${resSoma}`);

    // 4. Teste Negativo de Divisão por Zero
    try {
        calcular(10, 0, "divisao");
        console.error("X Falhou: Devia ter dado erro na divisão por zero");
        process.exit(1);
    } catch (e) {
        console.assert(e.message === "Divisão por zero...", "Mensagem de erro de divisão incorreta");
    }

    console.log("√ Todos os testes passaram com sucesso!");
} catch (error) {
    console.error("X O Guardião encontrou uma falha:");
    console.error(error.message);
    process.exit(1); // Informa ao GitHub Actions que o teste falhou
}
