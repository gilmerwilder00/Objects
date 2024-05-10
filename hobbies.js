// Actividad 02: Desestructuración de objetos

// Paso 2. 
individual = ['leer', 'pintar','caminar']
enPareja = ['dibujar', 'ver peliculas', 'entrenar', 'Manejar bicicleta'];
conAmigos = ['correr', 'jugar videojuegos', 'bailar']
conFamilia = ['viajar', 'cocinar', 'cantar', 'pasear']

// Paso3. Aplica desestructuración de arrays
const [,,hobby1] = enPareja;
const [,,,hobby2] = conFamilia;

// Paso4. Utiliza un template string para crear un mensaje
const message =`Uno de mis hobbies favoritos para hacer en pareja es ${hobby1}, 
y uno de  los mejores para hacer en familia es ${hobby2}.`;


function printMessage(){
    document.getElementById('hobbies-seleccionados').textContent =message;    
}

printMessage();

console.log('Individual:');
console.log(individual);
console.log('En pareja:');
console.log(enPareja);
console.log('Con Amigos:');
console.log(conAmigos);
console.log('Con Familia:');
console.log(conFamilia);


//Actividad 03: Creación de un nuevo objeto con un nuevo arreglo
console.log('Todos:');
const todos = { hobbies:[...individual,...enPareja, ...conAmigos, ...conFamilia] }
console.log(todos);


// Actividade 04: Definición personalizada de hobbies

const algunos = {
    hobbies:[
        // Segundo hobby del arreglo individual
        individual[1],
        // Tercer y cuarto hobby del arreglo enPareja
        ...enPareja.slice(2),
        // Primer hobby del arreglo conAmigos
        conAmigos[0],
        // Primer hobby del arreglo conFamilia
        conFamilia[0]
      ]
}
console.log('Algunos:');
console.log(algunos);