function calcularColor(num) {
    let color="";
    if (num === 1) {
        color = "Negro";
    } else if(num === 2) {
        color = "blanco";
    } else if(num === 3) {
        color = "Azul";
    } else{
        color = "verde";
    }

    return "El color es " + color;
}
console.log(calcularColor(3));