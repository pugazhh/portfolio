let cart = document.querySelector(".cart-view");
let btnadd = document.querySelector(".cart");
let btndel = document.querySelector(".cart-remove");
btnadd.addEventListener("click", () =>{
  cart.classList.add("cart-view-active");
});

btndel.addEventListener("click", () =>{
  cart.classList.remove("cart-view-active");
});

// /count item
document.addEventListener('DOMContentLoaded',loaded)
function loaded(){
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let num = document.querySelectorAll(".num");
let mul = document.querySelectorAll(".mul");
let a = 1;
let sum =mul;
console.log(sum);
plus.forEach((btn) =>{
  btn.addEventListener("click",()=>{
   a++;
   num.forEach((view)=>{
    view.innerHTML=a;
   })
   mul.forEach((view)=>{
   let ans=adding(a,sum);
   view.innerHTML=ans
   
   })
})
})

minus.forEach((btn) =>{
btn.addEventListener("click",()=>{
   a--;
   (a>0)?a:a=1;
   num.forEach((view)=>{
    view.innerHTML=a;
   })
   mul.forEach((view)=>{
   let ans =minusing(adding(a,sum));
   view.innerHTML =ans;

   })
})
})

let adding = (a,sum) =>{
  let result = 150*a;
  return result;
}

let minusing = (y) =>{
  console.log(y)
  let result = y;
  return result;
}


let itemRem = document.querySelectorAll(".item-remove");
console.log(itemRem);

itemRem.forEach((btn)=>{
  btn.addEventListener("click",() =>{
    btn.parentElement.remove();
  })  
});

let cartbtn = document.querySelectorAll(".cart-btn");
console.log(cartbtn)
cartbtn.forEach((btn) => {
  btn.addEventListener("click", () =>{
    let food = btn.parentElement;
    let title =food.querySelector(".title-cart").innerHTML;
    let rate = food.querySelector(".cart-rate").innerHTML
    let img = food.querySelector(".cart-img").src
    console.log(title,rate,img);
    let newCartItem = createCartItem(title,rate,img)
    let element = document.createElement('div');
    element.innerHTML=newCartItem;
    let cartbasket = document.querySelector(".cart-product")
    cartbasket.append(element)
   console.log(newCartItem,cartbasket,element);
   loaded();
  })
})

let createCartItem = (title,rate,img) =>{
  return` <div class="cart-item">
  <img src="${img}" alt="" height="70px"
  width="100">
  <div class="item-name">
      <h4 class="title-cart">${title}</h4>
      <p>Rs.<span class="mul">${rate}</span></p>
  </div>
  <div class="count">
      <span class="minus">-</span>
      <p class="num">1</p>
      <span class="plus">+</span>
  </div>
  <div class="item-remove">
  <i class="fa-solid fa-circle-xmark"></i>
  </div>`
}
}
