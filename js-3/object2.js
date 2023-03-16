let persona = {
    nombre: "Tomas",
    edad: 18,
    ciudad: "Sincelejo",
    profesion: "Ing Sistemas"
}
console.log(persona);

//Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad;
}
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = presentacion(persona);

//Imprime en la consola el valor de la variable "mensaje".
console.log(mensaje);

//Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos
persona.hobbies = ["Leer", "Inglés", "Cocinar"];

//Imprime en la consola la propiedad "hobbies" del objeto "persona".
for (let i in persona.hobbies) {
    console.log(persona.hobbies[i]);
}