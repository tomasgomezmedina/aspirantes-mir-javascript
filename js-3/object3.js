let receta = {};
//Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = "Sandwich";
//Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes = [];
receta.ingredientes = [{ nombre: "Pan", cantidad: 2 },
    {nombre: "Queso", cantidad: 1
}];

//Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log(receta.ingredientes[0].nombre);

//Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let acum = 0;//variable para guardar la suma de las cantidades
for (let i = 0; i < receta.ingredientes.length; i++) {
    acum += receta.ingredientes[i].cantidad;
}
console.log(acum);