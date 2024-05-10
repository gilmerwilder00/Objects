
// Actividad 01:   Property Shorthand

const nombre = 'Pedro Suarez Lopez';
const edad = 24;
const correo = 'pedros@gmail.com';
const altura = 1.75;
const peso = 65;

// 

// Paso1.Definición del Objeto con Property Shorthand (estructuracion de objetos)

// const perfil1 = {
//     nombre: nombre,
//     edad: edad,
//     correo:correo,
//     altura:altura,
//     peso:peso
// }


const perfil = {nombre,edad,correo,altura,peso};

console.log(perfil);

// Paso 2. Uso del objeto en HTMl
document.getElementById('nombre').textContent = `Nombre : ${perfil.nombre}`
document.getElementById('edad').textContent = `Edad : ${perfil.edad}`
document.getElementById('correo').textContent = `Correo : ${perfil.correo}`
document.getElementById('altura').textContent = `Altura : ${perfil.altura} mts`
document.getElementById('peso').textContent = `Peso : ${perfil.peso} Kg`

// Paso 3. Implementacion de Condiciones y Operadores
// console.log(perfil.edad);
// console.log(typeof(perfil.edad));

if(perfil.edad<18){
    document.getElementById('altura').classList.add('hidden');
    document.getElementById('peso').classList.add('hidden');
}else{
    document.getElementById('altura').classList.remove('hidden');
    document.getElementById('peso').classList.remove('hidden');
}

// Actividad 02:  Desestructuración de objetos

// Ejemplo

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas);

["manzana", "banana", "naranja"]

let [fruta1, fruta2, fruta3] = frutas; 

console.log(fruta1); // manzana
console.log(fruta2); // banana
console.log(fruta3); // naranja
