function maxIndex(array=[]) {
    if (array.length === 0) {
        return -1;
    }
    //creo una variable numMax con el valor del primer indice del array
    let numMax = array[0];
    let indiceMax=0;//variable para guardar el indice donde se encuentre el numero mayor

    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMax) {
            numMax = array[i]; //comparo si el valor del indice en el que me encuentro es mayor al valor que tiene numMax
            indiceMax = i;//guardo el indice donde esta ese valor maximo
        }
    }

    return indiceMax;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1