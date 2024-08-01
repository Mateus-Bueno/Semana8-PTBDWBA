// Função para criar e mostrar informações dos alunos
function mostrarDadosAlunos() {
    let alunos = [
        {
            nome: "João da Silva",
            primeiraNota: 7,
            segundaNota: 8.5
        },
        {
            nome: "Maria Oliveira",
            primeiraNota: 9,
            segundaNota: 7.5
        },
        {
            nome: "Carlos Pereira",
            primeiraNota: 6,
            segundaNota: 8
        }
    ];

    alunos.forEach(aluno => {
        let primeiraNotaCalculada = aluno.primeiraNota * 0.6;
        let segundaNotaCalculada = aluno.segundaNota * 0.4;
        let notaTotal = primeiraNotaCalculada + segundaNotaCalculada;

        alert(`Aluno: ${aluno.nome}\nPrimeira Nota: ${aluno.primeiraNota}\nSegunda Nota: ${aluno.segundaNota}`);
        alert(`Nota Total de ${aluno.nome}: ${notaTotal}`);
    });
}

mostrarDadosAlunos();