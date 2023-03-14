function bmi(peso, altura) {
    if (peso < 0 || altura < 0) {
        console.log("Los valores no pueden ser negativos");
    } else if (typeof peso != "number" || typeof altura != "number") {
        return "Los valores deben ser numeros";
    } else {
        return peso / (altura ** 2);
    }
}
console.log("El IMC es: " + bmi(75, 1.75));