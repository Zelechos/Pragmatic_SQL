// importamos librerias y frameworks para el desarrollo
const { Router } = require("express");
const router = Router();
const Book = require("../models/Book");
const { unlink } = require("fs-extra");
const path = require("path");

// APIREST
// utilizando async await para obtener los datos

// method get
router.get("/", async (request, response) => {
    const books = await Book.find();
    response.json(books);
});

// method post
router.post("/", async (request, response) => {
    const { title, description, subtitle } = request.body;
    const imagePath = "/uploads/" + request.file.filename;
    const newBook = new Book({ title, description, subtitle, imagePath });
    await newBook.save();
    response.json({ message: "Book saved" });
});

// method delete
router.delete("/:id", async (request, response) => {
    const book = await Book.findByIdAndDelete(request.params.id);
    // aqui eliminamo la imagen del la carpeta uplods dado que la tarea ya no existe
    unlink(path.resolve("./backend/public/" + book.imagePath));
    response.json({ message: "Book deleted" });
});

// =====================================================================
// Ruta para buscar por un id un libro
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// Ruta para actualizar los datos existentes
router.put("/:id", async (req, res) => {
    const { title, description, subtitle } = req.body;
    // const imagePath = "/uploads/" + request.file.filename;
    const imagePath = "/uploads/1637715862233.png";
    // const newBook = new Book();
    const book = await Book.findByIdAndUpdate(
        { _id: req.params.id },
        { title, description, subtitle, imagePath }
        // (err) => {
        //     if (err)
        //         return res.status(400).json({
        //             error: true,
        //             message: err.message,
        //         });
        // }
    );
    console.log(book);
    res.json({ message: "Libro Actualizado correctamente" });
});

// Exportando la constante router
module.exports = router;
