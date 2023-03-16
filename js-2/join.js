function join(array = []) {
    if (array.length === 0) {
        return "''";
    }
    let cadena = "";
    for (let i = 0; i < array.length; i++) {
        cadena += array[i]+" ";
    }
    return cadena;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""