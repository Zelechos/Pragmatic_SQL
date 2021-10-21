class Bookservice{
    
    constructor(){
        // aqui obtenemos la direccion de donde estas nuestra API REST
        this.URI = '/api/books';
    }

    // Methods para interactruar en el backend
    async getBook(){
        const response = await fetch(this.URI);
        const books = await response.json();//convertimos nuestra respuesta a json para manipular los datos
        return books;
    }

    async postBook(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await response.json();//convertimos nuestra respuesta a json para manipular los datos
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
        const data = await response.json();//convertimos nuestra respuesta a json para manipular los datos
        console.log(data);        
    }
}

export default Bookservice;