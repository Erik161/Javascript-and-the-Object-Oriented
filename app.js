class Product {
    constructor(name, price, year){
        this.name= name;
        this.price= price;
        this.year=year;
    }

}

class UI {
    addProduct(){

    }

    deleteProduct(){

    }

    showMessage(){

    }

}

// DOM EVENTS
document.getElementById('product-form')
                                        //(e) se abrevia como evento
.addEventListener('submit', function (e) {
    const name= document.getElementById('name').value;
    const price= document.getElementById('price').value;
    const year= document.getElementById('year').value;


   const product = new Product(name, price, year);

    //evento que deja de refrescar la pagina a la hora de enviar datos por submit
    //cada vez que se envian datos desde un formulario la pagina se refresca
    // para poder recibir luego eventos que un servidor envia, la respuesta que un servidor envia!
    e.preventDefault();
});