function calculaIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${
        this.idade + anos} de idade.`
}

const pessoa1 = {
    nome: 'Marcos',
    idade: 27,
};

const pessoa2 = {
    nome: 'Julia',
    idade: 43,
};

const animal = {
    nome: 'Rex',
    idade: 3,
    raca: 'pug',
};

// console.log(calculaIdade.call(pessoa2, 20));
console.log(calculaIdade.apply(pessoa2, [5]));