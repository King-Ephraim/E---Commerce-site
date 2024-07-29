const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let number = document.getElementById("number");

//convertir en entier la valeur de number
let numberConvert = parseInt(number, 10);
numberConvert = 0;
plus.addEventListener("click", () => {
    numberConvert++;
    number.innerText = numberConvert;
})
minus.addEventListener("click", () => {
    numberConvert--
    number.innerText = numberConvert;
    if (numberConvert < 0) {
        numberConvert = 0
        number.innerText = numberConvert
    }

})

//recuperer le pseudo element du panier

let panierAfter = document.querySelector(".panierAfter")

const cardBoutton = document.querySelector(".addButton button");
cardBoutton.addEventListener("click", () => {
    panierAfter.style.display = 'block'
    panierAfter.innerText = numberConvert
    cart.style.display = 'block'
    if (numberConvert === 0) {
        panierAfter.style.display = 'none'
    }
    calculerPrixTotal()
})



const principal_sneaker = document.querySelector(".principal_sneaker")
const views = document.querySelector(".views")
const close_views = document.querySelector(".close_view")

principal_sneaker.addEventListener('click', () => {
    views.style.display = "block"
    document.querySelector(".background").style.display = 'block'
})
close_views.addEventListener('click', () => {
    views.style.display = "none"
    document.querySelector(".background").style.display = 'none'
})


//gerer le menu pour la partie mobile

const menu = document.querySelector(".menu")
let ulElement = document.querySelector(".entete nav ul")
ulElement.style.zIndex = '2';
let liElement = document.querySelector(".entete nav ul li");
liElement.style.marginLeft = '30px';
let closeMobile = document.querySelector(".close img");
closeMobile.style.marginTop = '25px'
menu.addEventListener("click", () => {
    ulElement.style.display = 'block'
})

closeMobile.addEventListener("click", () => {
    ulElement.style.display = 'none'
})




let small_sneakers = document.querySelectorAll(".small_sneaker")
console.log(small_sneakers)

small_sneakers.forEach(small_sneakers => {
    small_sneakers.addEventListener("click", (event) => {
        const src = event.target.src
        principal_sneaker.innerHTML = `<img src="${src}" alt="Sneaker Image">`;
    })
})


// gere la partie du panier 
const cartBoutton = document.querySelector('.cart-boutton button')
const component = document.querySelector('.component')
const empty = document.getElementById("empty")

function calculerPrixTotal() {
    const sneakerPrice = 125;
    let result = sneakerPrice * numberConvert
    const resultContainer = document.querySelector('.result')
    const numberSneaker = document.querySelector('.number')

    if (numberConvert === 0) {
        empty.style.display = "block"
        component.style.display = "none"
        cartBoutton.style.display = "none"
    } else {
        empty.style.display = "none"
        component.style.display = "flex"
        cartBoutton.style.display = "block"
        numberSneaker.innerText = numberConvert
        resultContainer.innerHTML = "  $" + result
    }
}

const panier = document.querySelector(".panier")
const cart = document.querySelector('.cart')
panier.addEventListener('click', () => {
    cart.style.display = 'block'
    calculerPrixTotal()
})


cartBoutton.addEventListener('click', calculerPrixTotal)

const cartSvg = document.querySelector('.cart-svg svg')

cartSvg.addEventListener('click', () => {
    cart.style.display = 'none'
    panierAfter.style.display = 'none'
})



// gere les boutons next et previous pour faire defiler les images 

const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')

const principal_sneaker_view = document.querySelector('.principal_sneaker_view ')
const list_sneaker_view = document.querySelectorAll('.sneaker_view ')
console.log(list_sneaker_view)


list_sneaker_view.forEach(list_sneaker_view => {
    list_sneaker_view.addEventListener("click", (event) => {
        const viewSrc = event.target.src
        principal_sneaker_view.innerHTML = `<img src="${viewSrc}" alt="Sneaker Image">`;
    })

})

const list_sneaker_viewImage = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
];

let ImageView = 0;


nextButton.addEventListener('click', () => {
    if (ImageView < list_sneaker_viewImage.length) {
        const containerView = list_sneaker_viewImage[ImageView];
        principal_sneaker_view.innerHTML = `<img src="${containerView}" alt="Sneaker Image">`;
        ImageView++;
    } else {
        ImageView = 0;
    }
});

previousButton.addEventListener('click', () => {
    if (ImageView < list_sneaker_viewImage.length) {
        const containerViewSrc = list_sneaker_viewImage[ImageView];
        principal_sneaker_view.innerHTML = `<img src="${containerViewSrc}" alt="Sneaker Image">`;
        ImageView--;
    } 
    
});


const previousButtonMobile = document.getElementById('previous_mobile')
const nextButtonMobile = document.getElementById('next_mobile')

