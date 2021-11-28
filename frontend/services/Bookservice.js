class Bookservice{
    
    // Constructor de BookService
    constructor(){
        // aqui obtenemos la direccion URL de donde estas nuestra API REST
        this.URI = '/api/books';
    }

    // Methods para interactruar en el backend

    // peticion asincrona GET
    async getBook(){
        const response = await fetch(this.URI);
        const books = await response.json();//convertimos nuestra respuesta a json para manipular los datos
        return books;
    }

    // peticion asincrona POST
    async postBook(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await response.json();//convertimos nuestra respuesta a json para manipular los datos
        console.log(data);
        // return data;
    }

    // peticion asincrona DELETE
    async deleteBook(Id){
        const response = await fetch(`${this.URI}/${Id}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await response.json();//convertimos nuestra respuesta a json para manipular los datos
        console.log(data);        
    }

    // peticion asincrona UPDATE (pendiente....)

}


export default Bookservice;