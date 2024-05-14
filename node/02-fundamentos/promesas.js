// simulamos la base de datos con estos arreglos que contienen objetos
let empleados = [{
        id: 1,
        nombre: "Luz mariel",
    },
    {
        id: 2,
        nombre: "Alexander",
    },
    {
        id: 3,
        nombre: "Gabriela",
    },
];

let salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 3000,
    },
];

// obtenemos los empleados usando promesas
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        // con el find recorremos toda la base de datos
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        // esta clausula me devuelva el error en caso de que exista un error
        if (!empleadoDB) {
            reject(`El empleado con el ID: ${id} no existe`);
        } else {
            // en promesas para enviar más de un dato debería ser un objeto
            // a diferencia de los callbaacks que no tiene que ser dentro de un objeto
            resolve(empleadoDB);
        }

    })
}

// aqui el parametro es el empleado porque el salario y el parametro estan relacionados
let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        // aqui igualamos los ID 
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        // si no se encuentra un salario
        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
        } else {
            // pasamos la data como un objeto como respuesta
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    })
}

// primero obtenemos el empleado y luego el salario porque ya tenemos al empleado
getEmpleado(1).then((empleado) => {

    return getSalario(empleado);

}).then((resp) => {

    console.log(`El salaio del empleado ${resp.nombre} es de: ${resp.salario}`);

}).catch(err => {

    console.log(err)

})