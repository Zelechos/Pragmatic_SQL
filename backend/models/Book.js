// Importamos mongoose para trabajar en la BD
const { Schema , model } = require('mongoose');

const BookSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    subtitle: {type:String, required:true},
    imagePath: {type:String, required:true},
    created_at: {type:Date, default: Date.now}
});

// exportamos el modelo
module.exports = model('Book', BookSchema);