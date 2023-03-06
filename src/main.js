const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartItems = document.querySelector(".my-order-container");
const iconMenu = document.querySelector(".iconMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconClose = document.querySelector(".iconClose");
const cardsContainer = document.querySelector('.cards-container');
const productCard = document.querySelector(".product-card");
const productDetail=document.querySelector(".product-detail");
const plussButton=document.querySelector(".pluss-b");
const lessButton=document.querySelector(".less-b");
const amountItem=document.querySelector(".amountItem");
const plussLessButton=document.querySelector(".plus-less-button");
const addtoCartButton=document.querySelector(".add-to-cart-button");
const shoppingCartIcon=document.querySelector(".navbar-shopping-cart");
const myOrderContent=document.querySelector(".my-order-content");
const deleteItemCart=document.querySelector(".delete-icon");

let Amount=0;

iconMenu.addEventListener("click", openMobileMenu);
iconClose.addEventListener("click", closeMobileMenu);
cartIcon.addEventListener("click", toggleDescktopCart);
plussButton.addEventListener("click", plussAmount);
lessButton.addEventListener("click", lessAmount);
addtoCartButton.addEventListener("click", addtoCart );

//DELete itemsCart
myOrderContent.addEventListener("click", (event)=>{
    if(event.target.className==="delete-icon"){
     myOrderContent.innerHTML=`<p class="cartEmpty"> Your cart is empty</p>`;
     const child=shoppingCartIcon.querySelector(".amountIconCart");
    shoppingCartIcon.removeChild(child);
    }   
});



function addtoCart(){
    const itemCart = ` 
    <div class="order">
      <figure>
        <img class="img-product-cart" src="./assets/image-product-1-thumbnail.jpg" alt="">
      </figure>
      <div class="info-item-container">
        <p>
          Fall Limited Edition sneaker
        </p>
        <div class="value-items">
          <span>$ 125.00</span>
          <span>X ${Amount}</span>
          <p>$ ${125.00*Amount}</p>
        </div>
      </div>
      <img class="delete-icon" src="./assets/icon-delete.svg" alt="delete">
    </div>
  
    <button class="checkout-button">Checkout</button>
  
  </div>`;

  if(Amount!==0){
    let amountIconCart= document.createElement("div");
    amountIconCart.classList.add("amountIconCart")
    amountIconCart.innerText = Amount;
    myOrderContent.innerHTML=itemCart;

    

    shoppingCartIcon.appendChild(amountIconCart);

  }   
}

function plussAmount(){
    Amount++;
    amountItem.innerHTML=""+Amount;
}

function lessAmount(){
    if (Amount > 0) { // Solo decrementar el Amount si es mayor que cero
        Amount--;
        amountItem.innerHTML=""+Amount;
        if(Amount<=0){
            plussLessButton.classList.remove("less-b");
        }
    }
}

function toggleDescktopCart(){
    mobileMenu.classList.add("inactive");
    cartItems.classList.toggle("inactive");




}



function openMobileMenu(){
    cartItems.classList.add("inactive");

    mobileMenu.classList.remove("inactive"); 
}


function closeMobileMenu(){
    mobileMenu.classList.add("inactive"); 
}


cardsContainer.addEventListener("click", (event)=>{
    if(event.target.nodeName==="IMG"){

    productDetail.classList.remove("inactive");
    cardsContainer.classList.add("inactive");
    amountItem.innerHTML= Amount;
   
    }   
});

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

function renderProducts(arr){
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
renderProducts(productList)
