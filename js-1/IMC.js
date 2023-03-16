function bmi(peso, altura) {
    if (peso < 0 || altura < 0) {
        return "Los valores no pueden ser negativos";
    }
    else if (typeof peso != "number" || typeof altura != "number") {
        return "Los valores deben ser numeros";

    } else {
        return peso / (altura ** 2);
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695