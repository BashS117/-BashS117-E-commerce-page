const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartItems = document.querySelector(".my-order-container");
const iconMenu = document.querySelector(".iconMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconClose = document.querySelector(".iconClose");
const cardsContainer = document.querySelector('.cards-container')


cartIcon.addEventListener("click", toggleDescktopCart);

function toggleDescktopCart(){
    mobileMenu.classList.add("inactive");
    cartItems.classList.toggle("inactive");




}


iconMenu.addEventListener("click", openMobileMenu);

function openMobileMenu(){
    cartItems.classList.add("inactive");

    mobileMenu.classList.remove("inactive"); 
}

iconClose.addEventListener("click", closeMobileMenu);

function closeMobileMenu(){
    mobileMenu.classList.add("inactive"); 
}

const productList = [];
productList.push({
    
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    
    name: "Pantalla",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    
    name: "computador",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

// <!-- <div class="product-card">
//             <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//             <div class="product-info">
//               <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//               </div>
//               <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//               </figure>
//             </div>
//           </div> -->

function renderProductrs(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const  productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/add-to-cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv);
        productInfo.append(productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    
    
    
    
    
    
    }
}
renderProductrs(productList)