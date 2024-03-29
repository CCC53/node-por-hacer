const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Actualiza el estado de una tarea'
}

const argv = require('yargs').command('crear', 'Crea una tarea por hacer', {
    descripcion
}).
command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion,
    completado
}).command('borrar', 'Borra una tarea por hacer', {
    descripcion
}).help().argv;

module.exports = {
    argv
}