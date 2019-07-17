//Condicional ternario

var carro = {
    portas: 4,
    marca: "Fiat"
};

var modelo;
var ternario =  carro.portas === 4 ? 
(modelo = "quatro portas" ): 
(modelo = "duas portas");

console.log(ternario);