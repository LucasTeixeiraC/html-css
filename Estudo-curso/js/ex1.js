var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]
var nota = 0;
var aluno = ''

for (var i = 0; i < alunos.length; i++) {
    nota = 0;

    aluno = alunos[i]
    console.log("Aluno: " + aluno[i])
    for (c = 0; c < aluno.length; c++) {
        nota += aluno[c];
    }
    media = nota / 4;
    if (media >= 7) {
        resultado = "aprovado"

    }
    else {
        resultado = "reprovado"
    }
    console.log("Media : " + media + " - " + resultado)
}