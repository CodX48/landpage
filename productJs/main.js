import { nav } from "../JsHome/header_nav.js";
import { productContainer } from "./products.js";
import { search } from "./serach_comp.js"; 

let root = document.getElementById('rooter');
root.innerHTML = `${nav} ${search} ${productContainer}`;

let items = document.querySelectorAll(".product-content");

document.getElementById('search').addEventListener('input', (ele) => {
    let q = ele.target.value.toLowerCase(); // Use ele.target.value to get the input value
    items.forEach((item) => {
        if (item.children[2].children[0].textContent.toLowerCase().includes(q)) {
            item.style.display = "list-item"; // Use display property instead of style.style
        } else {
            item.style.display = "none";
        }
    });
});


let i = document.querySelectorAll('.product-content i');
i.forEach(ele =>{
    let test = false;
ele.addEventListener('click', ()=>{
    if(!test) {
        ele.style.color = "red"
        test = !test
    }else{
         ele.style.color = "#565069"
         test = !test
    }
})
})
let shopping_cart = document.getElementById('add_pr');
shopping_cart.setAttribute('count',0);
let product = document.querySelectorAll('#add_product')

product.forEach( e=>{
    e.addEventListener('click', ele =>{
        let count = parseInt(shopping_cart.getAttribute('count'));
        count++;
        shopping_cart.setAttribute('count',count);
        ele.preventDefault();
    })
})

