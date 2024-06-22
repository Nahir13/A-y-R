const product = [
    {
        id: 0,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/1.jpg?raw=true',
        title: 'Saco Express',
        price: 18.000,
    },
    {
        id: 1,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/2.jpg?raw=true',
        title: 'Pollera Lisa Negra Kasper',
        price: 12.000,
    },
    {
        id: 2,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/3.jpg?raw=true',
        title: 'Pollera Negra Dana Buchman con bolsillo de cierre',
        price: 12.000,
    },
    {
        id: 3,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/4.jpg?raw=true',
        title: 'Pollera marron East5th',
        price: 12.000,
    },
    {
        id: 4,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/5.jpg?raw=true',
        title: 'Pollera estampada Kasper',
        price: 12.000,
    },
    {
        id: 7,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/8.jpg?raw=true',
        title: 'Pantalon estampado Rombo Evelyn Brandt',
        price: 18.000,
    },
    {
        id: 8,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/pantalon.jpg?raw=true',
        title: 'Pantalon Talbots Puntos',
        price: 18.000,
    },
    {
        id: 9,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/10.jpg?raw=true',
        title: 'Pantalon Gris Ashley Stewart',
        price: 18.000,
    },
    {
        id: 10,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/11.jpg?raw=true',
        title: 'Pantalon White Black',
        price: 18.000,
    },
    {
        id: 11,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/12.jpg?raw=true',
        title: 'Pantalon Worthington',
        price: 18.000,
    },
    {
        id: 13,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/14.jpg?raw=true',
        title: 'Vestido azul Rayado de lanilla Old Navy<',
        price: 12.000,
    },
    {
        id: 14,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/15.jpg?raw=true',
        title: 'Vestido Celeste estampado Be',
        price: 12.000,
    },
    {
        id: 15,
        image: 'https://github.com/Nahir13/A-y-R/blob/main/imagenes/16.jpg?raw=true',
        title: 'Pollera Negra Chadwicks',
        price: 12.000,
    },
];
const categories = [...new Set(product.map((item) => 
    { return item }))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
        var { image, title, price } = item;
        return (
            `<div class='caja'>
                <div class='img-caja'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p class="letra">${title}</p>
            <h2 class="letra">$ ${price}.000</h2>` +
            "<button onclick='addtocart(" + (i++) + ")'>Agregar producto</button>" +
            `</div>
            </div>`
        )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]})
    displaycart();
}
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Tu Carrito está vacio";
        document.getElementById("total").innerHTML = "$ "+0+".000";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => 
            {
                var { image, title, price } = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".000";
                return (
                    `<div class='carta-item'>
                    <div class='ho-la'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.000</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
                );
            }).join('')
    }
}


function showMoreProducts() {
    const productContainer = document.getElementById('productContainer');
    const currentProductsCount = productContainer.querySelectorAll('.product').length;
    const totalProductsCount = categories.length;

    if (currentProductsCount < totalProductsCount) {
        const startIndex = currentProductsCount;
        const endIndex = Math.min(startIndex + 3, totalProductsCount);

        for (let i = startIndex; i < endIndex; i++) {
            const { image, title, price } = categories[i];
            const product = document.createElement('div');
            product.classList.add('product', 'additional-product'); // Agrega la clase .additional-product
            product.innerHTML = `
                <img src="${image}" alt="${title}" width="100" height="auto">
                <span>${title}</span>
                <span>$${price}</span>
                <a href="ropa.html" class="linea"><button onclick="addtocart(${i})">Ir a Productos</button></a>
            `;
            productContainer.appendChild(product);
        }
    }
}

function showLessProducts() {
    const productContainer = document.getElementById('productContainer');
    const currentProductsCount = productContainer.querySelectorAll('.product').length;

    if (currentProductsCount > 3) {
        const productsToRemove = currentProductsCount - 3;

        for (let i = 0; i < productsToRemove; i++) {
            const lastProduct = productContainer.querySelector('.product:last-child');
            productContainer.removeChild(lastProduct);
        }
        window.scrollTo(0, 0); // Scroll to the top of the page after removing products
    }
    
}