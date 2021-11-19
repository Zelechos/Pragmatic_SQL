// importamos librerias y frameworks para el desarrollo
const { Router } = require('express');
const router = Router();
const Book = require('../models/Book');
const { unlink } = require('fs-extra');
const path = require('path');

// APIREST
// utilizando async await para obtener los datos

// method get
router.get('/', async (request, response) => {
    const books = await Book.find();
    response.json(books);
});

// method post
router.post('/', async (request, response) => {
    const {title, description, subtitle} = request.body;
    const imagePath = '/uploads/' + request.file.filename;
    const newBook = new Book({title, description, subtitle, imagePath});
    await newBook.save();
    response.json({'message': 'Book saved'});
});

// method delete
router.delete('/:id', async (request, response) =>{
    const book = await Book.findByIdAndDelete(request.params.id);
    // aqui eliminamo la imagen del la carpeta uplods dado que la tarea ya no existe
    unlink(path.resolve('./backend/public/'+ book.imagePath));
    response.json({message:'Book deleted'});
});

// Exportando la constante router
module.exports = router;