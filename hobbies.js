// Actividad 02: Desestructuración de objetos

// Paso 2.
let individual = ["leer", "pintar", "caminar"];

let enPareja = ["dibujar", "ver peliculas", "entrenar", "Manejar bicicleta"];

let conAmigos = ["correr", "jugar videojuegos", "bailar"];
let conFamilia = ["viajar", "cocinar", "cantar", "pasear"];

// Paso3. Aplica desestructuración de arrays
// ['dibujar', 'ver peliculas', 'entrenar', 'Manejar bicicleta']
const [, , hobby1] = enPareja;
const [, , , hobby2] = conFamilia;

// Paso4. Utiliza un template string para crear un mensaje
const message = `Uno de mis hobbies favoritos para hacer en pareja es ${hobby1}, 
y uno de  los mejores para hacer en familia es ${hobby2}.`;

// console.log(message);

function printMessage() {
  document.getElementById("hobbies-seleccionados").textContent = message;
}

printMessage();

console.log("Individual:");
console.log(individual);
console.log("En pareja:");
console.log(enPareja);
console.log("Con Amigos:");
console.log(conAmigos);
console.log("Con Familia:");
console.log(conFamilia);

//Actividad 03: Creación de un nuevo objeto con un nuevo arreglo

const todos = {
  // hobbies : [ 'leer', 'pintar','caminar', 'dibujar', 'ver peliculas', 'entrenar', 'Manejar bicicleta', 'correr', 'jugar videojuegos', 'bailar',  'viajar', 'cocinar', 'cantar', 'pasear'  ]
  hobbies: [...individual , ...enPareja , ...conAmigos , ...conFamilia ],
//   hobbie2: [individual , enPareja , conAmigos , conFamilia ]
};

console.log("Todos:");
console.log(todos);

// Actividade 04: Definición personalizada de hobbies

console.log('SLICE');
console.log(enPareja);
console.log(enPareja.slice(1));
console.log(enPareja.slice(2));

const [ , , ...ejemplo ] = enPareja;
console.log('REST OPERATOR');
console.log(ejemplo);


const algunos = {

  hobbies: [
    // Segundo hobby del arreglo individual
    individual[1],
    // Tercer y cuarto hobby del arreglo enPareja

    // ['entrenar', 'Manejar bicicleta']
    ...enPareja.slice(2),
    // Primer hobby del arreglo conAmigos
    conAmigos[0],
    // Primer hobby del arreglo conFamilia
    conFamilia[0],
  ],
};


const algunos2 = {

    hobbies: [
      // Segundo hobby del arreglo individual
      individual[1],
      // Tercer y cuarto hobby del arreglo enPareja
      // ['entrenar', 'Manejar bicicleta']
      ...ejemplo,
      // Primer hobby del arreglo conAmigos
      conAmigos[0],
      // Primer hobby del arreglo conFamilia
      conFamilia[0],
    ],
  };










console.log("Algunos:");
console.log(algunos);

console.log(algunos2);
