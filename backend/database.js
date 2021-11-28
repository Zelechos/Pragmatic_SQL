const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
})
    .then(database => console.log("database connected"))
    .catch(error => console.error(error));