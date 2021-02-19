const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/jugadores", cors(), controller.readJugadores); // Read All
router.get("/jugadores/:id", cors(), controller.readJugador); // Read
router.delete("/jugadores/:id", cors(), controller.deleteJugador); // Delete
router.put("/jugadores/:id", cors(), controller.updateJugador); // Update
router.post("/jugadores", cors(), controller.createJugador); // Create

router.get("/equipos", cors(), controller.readEquipos); // Read All
router.get("/equipos/:id", cors(), controller.readEquipo); // Read
router.delete("/equipos/:id", cors(), controller.deleteEquipo); // Delete
router.put("/equipos/:id", cors(), controller.updateEquipo); // Update
router.post("/equipos", cors(), controller.createEquipo); // Create


module.exports = router;