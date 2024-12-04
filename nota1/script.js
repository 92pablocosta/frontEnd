// 1. Calculadora
function calculadora() {
    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const operacao = document.getElementById('calcOperacao').value;
    let resultado;

    if (operacao === 'soma') resultado = num1 + num2;
    else if (operacao === 'subtracao') resultado = num1 - num2;
    else if (operacao === 'multiplicacao') resultado = num1 * num2;
    else if (operacao === 'divisao') resultado = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero.';
    else resultado = 'Operação inválida.';

    document.getElementById('calcResultado').innerText = `Resultado: ${resultado}`;
}

// 2. Verificador de Palíndromo
function verificarPalindromo() {
    const palavra = document.getElementById('palavra').value;
    const reverso = palavra.split('').reverse().join('');
    const resultado = palavra === reverso ? `${palavra} é um palíndromo.` : `${palavra} não é um palíndromo.`;
    document.getElementById('palindromoResultado').innerText = resultado;
}

// 3. Lista de Tarefas
function gerenciarTarefas() {
    const tarefas = [];
    for (let i = 0; i < 5; i++) {
        const tarefa = prompt(`Digite a tarefa ${i + 1}:`);
        tarefas.push(tarefa);
    }
    alert(`Tarefas adicionadas: ${tarefas.join(', ')}`);
    const concluida = prompt('Digite a tarefa concluída:');
    const indice = tarefas.indexOf(concluida);
    if (indice !== -1) tarefas.splice(indice, 1);
    document.getElementById('tarefasResultado').innerText = `Tarefas atualizadas: ${tarefas.join(', ')}`;
}

// 4. Sistema de Notas
function calcularMedia() {
    const aluno = { nome: 'João', notas: [8, 7, 9] };
    const media = aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length;
    document.getElementById('notasResultado').innerText = `Aluno: ${aluno.nome}, Média: ${media}`;
}

// 5. Tabela de Multiplicação
function tabelaMultiplicacao() {
    const numero = parseInt(document.getElementById('tabelaNum').value);
    if (numero < 0) {
        document.getElementById('tabelaResultado').innerText = 'Digite um número positivo.';
        return;
    }
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById('tabelaResultado').innerText = resultado;
}

// 6. Verificador de Idade
function verificarIdade() {
    const pessoas = [];
    for (let i = 0; i < 5; i++) {
        const nome = prompt('Digite o nome:');
        const idade = parseInt(prompt('Digite a idade:'));
        pessoas.push({ nome, idade });
    }
    const maiores = pessoas.filter(pessoa => pessoa.idade > 18).map(pessoa => pessoa.nome);
    document.getElementById('idadeResultado').innerText = `Maiores de 18 anos: ${maiores.join(', ')}`;
}

// 7. Estoque de Produtos
function calcularEstoque() {
    const produtos = [
        { nome: 'Produto A', preco: 10, quantidade: 5 },
        { nome: 'Produto B', preco: 20, quantidade: 3 },
        { nome: 'Produto C', preco: 15, quantidade: 4 }
    ];
    const total = produtos.reduce((soma, produto) => soma + produto.preco * produto.quantidade, 0);
    document.getElementById('estoqueResultado').innerText = `Valor total do estoque: R$ ${total}`;
}
