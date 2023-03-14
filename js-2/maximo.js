function max(array=[]) {
    if (array.length === 0) {
        return undefined;
    }
    //creo una variable numMax con el valor del primer indice del array
    let numMax = array[0];
    //inicializo en 1 ya que el valor del primer indice ya lo tengo
    for (let i = 1; i < array.length; i++) {
        //comparo si el valor del indice en el que me encuentro es mayor al valor que tiene numMax
        if (array[i] > numMax) numMax = array[i];
    }
    
    return numMax;
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 4])) // 10
console.log(max([])) // undefined