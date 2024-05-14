/*
 *   ASYNC AWAIT
 */

let getNombre = async() => {
    return "luz mariel";
}

getNombre().then((usuario) => {
    console.log(usuario)
})