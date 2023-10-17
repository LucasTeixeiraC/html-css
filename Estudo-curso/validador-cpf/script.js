
function validCpf (cpf) {
    if(cpf.length != 11) {
        return false;
    } else {
        let numeros = cpf.substring(0,9)
            let digitos = cpf.substring(9)

            console.log('Numeros do cpf: ' + numeros)
            console.log('Digitos do cpf: ' + digitos)
    }
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
