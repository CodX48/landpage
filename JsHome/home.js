import {main_cont_tips} from "./simple_exarsice._module.js"
import {photos} from "./photos.js"
import { nav,main_home } from "./header_nav.js";
let home_docs = document.createElement('div');
let header = document.getElementById(`header`);
header.innerHTML =`${nav}${main_home}`
let doc_C_overall = document.createElement('div') //here i add the div that contains overall about what is calisthanics
doc_C_overall.className = "doc-C-overall";
let main = document.createElement('h1');
main.className = "mainQ-overall";
main.textContent = "What is Calisthenics?";
let overall_m =  document.createElement('p');
overall_m.textContent = "Calisthenics is a form of strength training that uses bodyweight exercises to build muscle, endurance, and flexibility. Unlike traditional weightlifting, calisthenics focuses on natural movements such as push-ups, pull-ups, squats, lunges, and planks. These exercises improve body control, coordination, and overall fitness without the need for equipment, making them accessible and effective for people of all skill levels. Calisthenics can be performed anywhere and can be scaled in difficulty, from basic moves for beginners to advanced exercises like muscle-ups and handstands for seasoned athletes. This versatile training method not only promotes functional strength but also enhances mobility and core stability, making it ideal for those looking to improve physical performance and body awareness."
doc_C_overall.appendChild(main)
doc_C_overall.appendChild(overall_m);
home_docs.appendChild(doc_C_overall);
header.after(home_docs);


class product{
     
    constructor(image_num){
        this.image  = image_num;
        }

    urls() {
        let url = ['https://cdn1.lacertosus.com/5087-thickbox_default/adjustable-pull-up-bar-pro-outdoor.webp',"https://www.gornation.com/cdn/shop/files/1-gornation-dip-bas.jpg?v=1693390362","https://gravity.fitness/cdn/shop/products/001-GravityFitnessParallettes2023.jpg?v=1679909747&width=2048","https://thetibbarguy.com/cdn/shop/files/2023-04-20_TibBarGuy_Product_0053Large.jpg?v=1691156855&width=2048"]
        return url[this.image]
    }
}


//top products
let top_products = document.createElement('div');
top_products.className = "top-products";
let product_title = document.createElement("h1")
product_title.className = "head-mess"
product_title.textContent = "Most Selling"
top_products.appendChild(product_title)

let card_cont = document.createElement("div")
card_cont.className = "card-cont";

for(let i =0 ;i<4;i++){
    let card = document.createElement('div');
    card.className = "card";
    card.id = "card"
    let more = document.createElement('h3')
    more.textContent = "More"

    card.addEventListener("mouseover", (ele) =>{
    more.style.bottom = "30px"
    })
    card.addEventListener("mouseleave", (ele) =>{
    more.style.bottom = "-70px"
    })

    card.appendChild(more)
    let img_div =document.createElement('div');
    img_div.className = "img-div"
    let img = document.createElement('img');
    img.src = new product(i).urls();
    img_div.appendChild(img);
    card.appendChild(img_div);
    card_cont.appendChild(card);
}
top_products.appendChild(card_cont)
home_docs.after(main_cont_tips)

main_cont_tips.after(top_products)

top_products.after(photos)

