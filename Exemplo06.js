var pessoa = {
    idade:21,
    nome: "Gustavo Manoel",
    altura: 1.87,
    casado: false,
}

function apresentar() {
    console.log("O nome da pessoa é: " + pessoa.nome  + ", A idade da pessoa é: " + pessoa.idade);
    if (pessoa.idade > 25) {
        alert("a pessoa tem mais de 25 anos")
    } else {
        alert("a pessoa tem menos de 25 anos")
    }
    var calculo = pessoa.idade + pessoa.altura;
    Console.log("Resultado do calculo é: " + calculo)
}

apresentar()