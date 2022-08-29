const nome = "Fagner Silva";
let nome2 = "Fag si";
let pessoaDefault = {
    nome: "Fagner",
    idade: "22",
    trabalho: "TI"
}

let nomes = ["josé", "pedro", "maria"];

let pessoas = [
    {
        nome: "Fagner",
    idade: "22",
    trabalho: "TI"
    },
    {
        nome: "Fagner do passado",
    idade: "21",
    trabalho: "Adm Assistente"
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um novo nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    console.log("Idade:");
    console.log(pessoa.idade);
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------IMPRIMIR PESSOAS---------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa ({
    nome: "Fagner adoles",
    idade: "17",
    trabalho: "estudante"
})

imprimirPessoas();

//imprimirPessoa(pessoaDefault);
// imprimirPessoa({nome: "Fagner do passado",
// idade: "21",
// trabalho: "Adm Assistente"
// })

//recebeEalteraNome("João Silva");
//recebeEalteraNome("Maria Silva");

//alterarNome();