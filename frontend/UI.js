// importamos nuestro Servicios
import Bookservice from './services/Bookservice';

// Instanciamos nuestros servicios
const bookService = new Bookservice();

import { format } from "timeago.js";
class UI {
    // para mostrar los datos
    async renderBooks() {
        const books = await bookService.getBook();
        const form = document.getElementById("form");
        if (books.length === 0) {
            form.style.display = "none";
        } else {
            // form.style.display = "block"; esto evita que se vea el buscador
            form.style.display = "none";
        }

        console.log(books.length);

        const booksData = document.getElementById("automata-content");
        booksData.innerHTML = "";
        books.forEach((element) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <!--Contenido de linea de tiempo-->
                <div class="timeline-content">
                    <a href="#" class="btn-edit" _id="${element._id}">Edit</a>
                    
                    <a href="#" class="btn-delete" _id="${element._id}">X</a>
                    
                    <a href="./code.html" target="_blank">
                        <h1>${element.title}</h1>
                        <div class="img-separator"></div><br>
            
                        <h3 class="solution">${element.subtitle}</h3>
                        <img src="${
                            element.imagePath
                        }" alt="" class="img-timiline">
                        <p>
                        ${element.description}
                        </p>

                        <div class="img-separator"></div>

                        <p>${format(element.created_at)}</p>

                    </a>
                </div>
            `;
            booksData.appendChild(li);
        });
    }

    // hacer post para agregar datos a la bd
    async addANewBook(book) {
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    //para limpiar el formulario
    clearBookForm() {
        document.getElementById("book-form").reset();
    }

    formStateSave(){
        document.getElementById("form-title").innerHTML = "Ingrese los datos de la Tarea";
        document.getElementById("save-update").innerHTML = "Save";
        document.getElementById("image").style.display = "block";
    }

    // para ocultar la imagen y cambiar el nombre del boton
    formStateUpdate(){
        document.getElementById("form-title").innerHTML = "Actualizando los datos de la Tarea";
        document.getElementById("save-update").innerHTML = "Update";
        document.getElementById("image").style.display = "none";
    }

    // devuelve la cantidad de datos
    async lengthBooks(){
        const data = await bookService.getBook();
        return data.length;
    }

    // llamamos a nuestra peticion asicrona delete datos y luego renderizamod los datos

    async deleteBook(id){
        await bookService.deleteBook(id);
        this.renderBooks();
    }

    // ======================================================
    // devuelve una sola tarea con un id especificado
    async getBookUnique(id) {
        // ocultamos el input de imagen
        this.formStateUpdate();

        const dataEdit = await bookService.getBookUnique(id);
        
        document.getElementById("idHidden").value = dataEdit._id;
        document.getElementById("title").value = dataEdit.title;
        document.getElementById("subtitle").value = dataEdit.subtitle;
        document.getElementById("description").value = dataEdit.description;
    }
    
    // actualizamos los datos en la base de datos
    async updateBook(id, book) {
        await bookService.updateBook(id, book);
        this.formStateSave();
        this.clearBookForm();
        this.renderBooks();
    }
}

export default UI;
