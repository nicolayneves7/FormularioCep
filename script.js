const campoCep = document.querySelector('#cep');
const btnBuscar = document.querySelector('#btnBuscar');
const campoLogradouro = document.querySelector('#logradouro');
const campoBairro = document.querySelector('#bairro');
const campoCidade = document.querySelector('#cidade');
const campoEstado = document.querySelector('#estado');

async function buscarCep() {

    const cep = campoCep.value;

    if (cep.length !== 8) {
        alert("Digite um CEP válido com 8 números");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const resposta = await fetch(url);
        const dadosCep = await resposta.json();

        if (dadosCep.erro) {
            alert("CEP não encontrado!");
            return;
        }

        campoLogradouro.value = dadosCep.logradouro;
        campoBairro.value = dadosCep.bairro;
        campoCidade.value = dadosCep.localidade;
        campoEstado.value = dadosCep.uf;

    } catch (erro) {
        alert("Erro ao buscar o CEP");
        console.error(erro);
    }
}

btnBuscar.addEventListener('click', buscarCep);
