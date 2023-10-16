
function validCpf (cpf) {
    return true;
}


function validar() {
    console.log('iniciando valição de cpf')
    let cpf = document.getElementById('cpf_digitado').value

    let resultadoValidacao = validCpf (cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}
