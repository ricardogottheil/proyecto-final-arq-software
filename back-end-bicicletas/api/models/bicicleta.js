const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let bicicletaSchema = new Schema({
    color: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: [Number, Number],
        required: true,
    },
});

module.exports = mongoose.model("Bicicleta", bicicletaSchema);
