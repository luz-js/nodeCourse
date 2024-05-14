//Funcion que define el usuario
// El callback será una funcion
let getUserById = (id, callback) => {

    // definimos el usurario como un objeto
    let usuario = {
        nombre: "luz mariel",
        apellido: "Rosario",
        id,
    }

    // Esta clausula es para definir los ERRORES (err)
    // El parametro callback sera una funcion
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la base de datos`)
    } else {
        callback(usuario)
    }

}

// llamamos la funcion
// el err es el parametro de error del callback
getUserById(20, (err, usuario) => {

    // si ocurre un error retornamos esto
    if (err) {
        return console.log(err)
    };

    // de lo contrario la funcion retornara el usuario
    console.log(`El usuario es`, usuario);

})