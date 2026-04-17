//parte 1

let materias = [
    "Programación FullStack",
    "Inginiería de Software",
    "UTULab",
    "experiencia de usuario",
];

//A-
console.log(materias);


//B-
console.log(materias[2]);

//C-
for (let indice = 0; indice < materias.length; indice++) {
    console.log(materias[indice]);
}


//D-
materias[3] = "Administración de Sistemas Operativos";

//E-
materias.push("Ciberseguridad");

console.log(materias);

//parte 2
let estudiantes = [];

//A-
estudiantes[0] = "Karen";
estudiantes[1] = "Heidy";
estudiantes[2] = "Manuel";
estudiantes[3] = "thiago";
estudiantes[4] = "Bruno";
estudiantes[5] = "Martin";
estudiantes[6] = "Elias";

//B-
console.log(estudiantes);

//C-
estudiantes[0] = "Federico";

//D-
estudiantes.pop();

//E-
console.log(estudiantes);


//partes 3
let productos = [
    "Pan",
    "Leche",
    "Arroz",
    "Fideos",
];

//A-
console.log(productos[2]);


//B-
productos.push("Azúcar");

//C-
productos.splice(0, 2);
for (let indice = 0; indice < productos.length; indice++) {
    console.log(productos[indice]);
}

//D-
for (let indice = 0; indice < productos.length; indice++) {
    console.log(productos[indice]);
}


//parte 4
let numeros = [
    10, 
    20, 
    30, 
    40, 
    50,
];

//A-
console.log(numeros[3]);

//B-
numeros[0] = 100;

//C-
numeros.pop();

//D-
numeros.push(60);

//E-
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}


//parte 5
let contactos = [];

contactos.push("Ana", "Luis", "Pedro", "María");

//A-
console.log(contactos[1]);

//B-
console.log(contactos[2] = "Juan");

//C-
contactos.splice(1, 1);

//D-
for (let indice = 0; indice < contactos.length; indice++) {
    console.log(contactos[indice]);
}


//parte 6
let tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio de JavaScript",
    "Leer un apuntes de JavaScript",
    "Escribir un código de JavaScript",
];

//A-

for (let indice = 0; indice < tareas.length; indice++) {
    console.log(tareas[indice]);
}

//B-
tareas[2] = "Repasar los apuntes de JavaScript";

//C-
tareas.push("Practicar con ejercicios de JavaScript");

//D-
tareas.pop();

//E-
for (let indice = 0; indice < contactos.length; indice++) {
console.log(tareas);
}


//parte 7
let equipos = [
    "Defenzor Sporting",
    "Liverpool",
    "Peñarol",
    "Nacional",
];

//A-
console.log(equipos[0]);

//B-
console.log(equipos[0]);


//C-
for (let indice = 0; indice < equipos.length; indice++) {
    console.log(equipos[indice]);
}

//D-
equipos[2] = "Montevideo City Torque";

//E-
equipos.push("Boston River");

//F-
equipos.splice(1, 1);

//G-
for (let indice = 0; indice < equipos.length; indice++) {
    console.log(equipos[indice]);
}