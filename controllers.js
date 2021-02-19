const { Jugador, Equipo } = require("./models.js");


// ------- JUGADORES

exports.readJugadores = (req, res) =>
    Jugador.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readJugador = (req, res) =>
    Jugador.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteJugador = (req, res) =>
    Jugador.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.updateJugador = (req, res) =>
    Jugador.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, posicion: req.body.posicion, dorsal: req.body.dorsal } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createJugador = (req, res) =>
    new Jugador({ nombre: req.body.nombre, posicion: req.body.posicion, dorsal: req.body.dorsal })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



// ------ EQUIPOS

exports.readEquipos = (req, res) =>
    Equipo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.readEquipo = (req, res) =>
    Equipo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.deleteEquipo = (req, res) =>
    Equipo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });



exports.updateEquipo = (req, res) =>
    Equipo.findOneAndUpdate({ _id: req.params.id }, { $set: { nombre: req.body.nombre, liga: req.body.liga, numeroTitulos: req.body.numeroTitulos } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );


exports.createEquipo = (req, res) =>
    new Equipo({ nombre: req.body.nombre, liga: req.body.liga, numeroTitulos: req.body.numeroTitulos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });