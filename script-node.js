//Aqui uso o módulo readline para conseguir fazer leitura de dados no terminal
const readline = require('readline')


const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Aqui crio uma interface para conseguir ler os dados do  terminal(stdin) e ver a saída(stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function limparForms() {
    console.log("Limpando campos...")
};

function preencherForms(endereco) {
    console.log(`Endereco: ${endereco.logradouro}`)
    console.log(`Bairro: ${endereco.bairro}`)
    console.log(`Cidade: ${endereco.localidade}`)
    console.log(`Estado: ${endereco.uf}`)
}

async function buscarCEP(cep) {
    limparForms();

    cep = cep.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if(cepValido(cep)) {
        try {
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty("erro")) {
                console.log("CEP não encontrado!");
            } else {
                preencherForms(endereco);
            }
        } catch(error) {
            console.error("Erro ao buscar cep:", error.message);
        }
    } else {
        console.log("CEP incorreto!");
    }
    rl.close();
};

rl.question("Digite o CEP:", (input)=> {
    buscarCEP(input)
})
