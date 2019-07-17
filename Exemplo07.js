var pessoa = {
    idade: 21,
    nome: "Gustavo Manoel",
    sobreNome: "da Silva",
    altura: 1.87,
    casado: false,
    aniversario: function(){
        pessoa.idade++;
    },
    nomeComSobreNome: function name() {
        return pessoa.nome = pessoa.nome + " " + pessoa.sobreNome;
    }
};


pessoa.aniversario();
pessoa.nomeComSobreNome();
console.log(pessoa);
