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

// hacemos la funcion de obtener los datos de la base de datos
let getEmpleado = (id, callback) => {

    // con el find recorremos toda la base de datos
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    // esta clausula me devuelva el error en caso de que exista un error
    if (!empleadoDB) {
        return callback(`El empleado con el ID: ${id} no existe`);
    } else {
        // nulo porpque no hay ningun error y devolvemos la data de empleados
        callback(null, empleadoDB);
    }

}

// obtenemos el salario del empleado que llamemos
let getSalario = (empleado, callback) => {

    // almacenamos el salario del empleado que pasemos por parametro
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    // si no existe un salario retornanos en ERR
    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {
        // retornamos el objeto
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
        });
    }


}

// llamamos la funcion creada, recordemos que el callback es una funcion y aqui lo pasamos
getEmpleado(2, (err, empleado) => {

    // si nos devuelve un error, lo imprimimos
    if (err) {
        return console.log(err)
    }

    // llamamos la funcion getSalario aqui porque dentro de getEmpleado estamos obteniendo el empleado
    getSalario(empleado, (err, response) => {

        // utilizamos el responde para recibir el objeto que está enviando el callback
        console.log(`El salaio del empleado ${response.nombre} es de: ${response.salario}`);

    })

});