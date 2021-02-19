const mongoose = require('mongoose');

const Jugador = mongoose.model('Jugador',
    new mongoose.Schema({ nombre: String, posicion: String, dorsal: Number })
);

const Equipo = mongoose.model('Equipo',
    new mongoose.Schema({ nombre: String, liga: String, numeroTitulos: Number })
);

module.exports = {
    Jugador: Jugador,
    Equipo: Equipo
}

// Otra forma más corta:
// module.exports = {
//     Jugador,
//     Equipo
// }