function sum(array=[]) {
    let result = 0;
    for (let i of array) {// for of para iterar cada indice en el arreglo 

        result += i;    
    }
    return result;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0