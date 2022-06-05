const maca = {nome: 2}

const orange = {value: 3}

function mapComThis (arr, thisArg) {
    return arr.map( function(item) {
    return item * this.nome;}, thisArg);   
}

const nums = [1,2];

console.log('this -> maçã', mapComThis(nums, maca));

const nums1 = [2, 6, 8, 10];

function mapSemThis (arr){
    return arr.map(function(item){
        return item * 2;
    })
}

console.log(mapSemThis(nums1));

function filtraPares (arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

const meuArray = [2, 3, 1];

console.log(filtraPares(meuArray));