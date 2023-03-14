function suma(num) {
    let acum=0;
    for (let i = 0; i < num+1; i++) {
        acum += i;
    }
    return acum;
}
console.log(suma(4));