function suma(num) {
    var acum=0;
    for (var i = 0; i < num+1; i++) {
        acum += i;
    }
    return acum
}
console.log(suma(4));