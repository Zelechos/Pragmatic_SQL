if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//-------- Incializaciones--------
const app = express();
require('./database');

//-------- Configuraciones del servidor--------

// asignamos puerto al servidor para levantar la web
app.set('port', process.env.PORT || 3000);

// --------- Middlewares-----------
app.use(morgan('dev'));
// storage sirve para almacenar las imagenes del usuario
const storage = multer.diskStorage({
    destination : path.join(__dirname,'public/uploads'),
    filename(request, file, callback){
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
});

// le pasamos nuestro storage a multer para las imagenes
// single() para enviar una sola imagen a la vez
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//-------- Rutas o Routes --------
app.use('/api/books',require('./routes/books'));


//-------- Arhivos estaticos --------
app.use(express.static(path.join(__dirname, 'public')));


//-------- Iniciamos el servidor --------

// aqui inicializamos el puerto
app.listen(app.get('port'), ()=>{
    console.log(`server ready in port => ${app.get('port')}`);
});

