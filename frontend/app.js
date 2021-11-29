require("./styles/main-style.css");
import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
    const userInterface = new UI();
    userInterface.renderBooks();
});

// Obtenemos el formulario
document.getElementById("book-form").addEventListener("submit", (event) => {
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").files;

    // console.log(title, subtitle, description, image);
    // empaquetamos los datos en un objeto FormData() para enviar por los methods
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("subtitle", subtitle);
    formData.append("image", image[0]);

    // const userInterface = new UI();
    // userInterface.addANewBook(formData);
    // ==================================================================
    const idHidden = document.getElementById("idHidden").value;
    if (idHidden != "") {
        const userInterface = new UI();
        userInterface.updateBook(idHidden, formData);
    } else {
        const userInterface = new UI();
        userInterface.addANewBook(formData);
    }
    // ==================================================================
    // al momento de enviar el formuluario ya no se reinicia el navegador
    event.preventDefault();
});

document
    .getElementById("automata-content")
    .addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-delete")) {
            const userInterface = new UI();
            userInterface.deleteBook(event.target.getAttribute("_id"));
        }
        event.preventDefault();
    });

// =======================================================================
document
    .getElementById("automata-content")
    .addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-edit")) {
            const userInterface = new UI();
            userInterface.getBookUnique(event.target.getAttribute("_id"));
            document.getElementById("image").style.cssText = "background:red;";
        }
        event.preventDefault();
    });

function updateBook() {
    document
        .getElementById("automata-content")
        .addEventListener("click", (event) => {
            if (event.target.classList.contains("btn-edit")) {
                const userInterface = new UI();
                userInterface.updateBook(
                    event.target.getAttribute("_id"),
                    formData
                );
            }
        });
}
