// importamos mongoose
const mongoose = require('mongoose');

// Nos conectamos a nuestro base de datos
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
})
    .then(database => console.log("database connected"))
    .catch(error => console.error(error));