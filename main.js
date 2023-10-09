class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0

    addProduct(title, descrption, price, image, code, stock) {
        ProductManager.id++
        this.products.push({ title, descrption, price, image, code, stock, id:ProductManager.id });
    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id);
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
        }
    }

const productos = new ProductManager 

console.log(productos.getProduct());

productos.addProduct('titulo1', 'descripcion1', 1000, 'imagen1', 'abc123', 5);
productos.addProduct('titulo2', 'descripcion2', 2000, 'imagen2', 'abc124', 5);

console.log(productos.getProduct());

productos.getProductById(3)