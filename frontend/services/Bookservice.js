// Creamos Nuestros servicios
class Bookservice{
    
    // Constructor de BookService
    constructor(){
        // aqui obtenemos la direccion de donde estas nuestra API REST
        this.URI = '/api/books';
    }

    // Methods para interactruar en el backend

    async getBook(){
        const response = await fetch(this.URI);

        //convertimos nuestra respuesta a json para manipular los datos
        const books = await response.json();
        return books;
    }

    async postBook(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });

        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);
        // return data;
    }

    async deleteBook(Id){
        const response = await fetch(`${this.URI}/${Id}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        
        //convertimos nuestra respuesta a json para manipular los datos
        const data = await response.json();
        console.log(data);        
    }
}

// Aqui exportamos nuestro servicio
export default Bookservice;