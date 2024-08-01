class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 9, 7.5),
    new Aluno("Carlos", "Pereira", 6, 8),
    new Aluno("Ana", "Martins", 5, 6),
    new Aluno("Pedro", "Alves", 7, 9)
];

function mostrarDadosAlunos() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
    });
}

mostrarDadosAlunos();