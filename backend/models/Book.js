const { Schema , model } = require('mongoose');

const BookSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    subtitle: {type:String, required:true},
    imagePath: {type:String, required:true},
    created_at: {type:Date, default: Date.now}
});

// exportamos el model
module.exports = model('Book', BookSchema);