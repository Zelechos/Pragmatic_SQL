// Creamos Nuestros servicios
class Bookservice {
    // Constructor de BookService
    constructor(){
        // aqui obtenemos la direccion URL de donde estas nuestra API REST
        this.URI = '/api/books';
    }

    // Methods para interactruar en el backend

    // peticion asincrona GET
    async getBook(){
        const response = await fetch(this.URI);

        //convertimos nuestra respuesta a json para manipular los datos
        const books = await response.json();
        return books;
    }

    // peticion asincrona POST
    async postBook(book){
        const response = await fetch(this.URI, {
            method: "POST",
            body: book,
        });

        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);
        // return data;
    }

    // peticion asincrona DELETE
    async deleteBook(Id){
        const response = await fetch(`${this.URI}/${Id}`,{
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE",
        });

        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);
    }

    // peticion asincrona UPDATE
    async updateBook(Id, book) {
        const response = await fetch(`${this.URI}/${Id}`, {
            method: "PUT",
            body: book,
        });

        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);
        return data;
    }

    // peticion asincrona GET tarea unica
    async getBookUnique(Id, book) {
        const response = await fetch(`${this.URI}/${Id}`);

        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);
        return data;
    }

}

// Aqui exportamos nuestro servicio
export default Bookservice;
