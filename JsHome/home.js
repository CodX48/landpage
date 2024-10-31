let home_docs = document.createElement('div');
let header = document.getElementById(`header`);
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

    constructor(name, price, description, image){
        this.name = name || "Unknown";
        this.price = price || `${100} $`;
        this.description = description || "Unknown";
        this.image = image = "https://gravity.fitness/cdn/shop/products/001-GravityFitnessParallettes2023.jpg?v=1679909747&width=512";
        }
}

//top products
let top_products = document.createElement('div');
top_products.className = "top-products";

for(let i =0 ;i<4;i++){
    let card = document.createElement('div');
    card.className = "card";
    let img_div =document.createElement('div');
    img_div.className = "img-div"
    let img = document.createElement('img');
    img.src = new product().image;
    img_div.appendChild(img);
    let name = document.createElement('h2');
    name.textContent = new product().name;
    let color_size_cont = document.createElement('div');
    color_size_cont.className = "color-size-cont";
    let color = document.createElement('span');
    let size = document.createElement('span');
    color.textContent = "Black";
    size.textContent = "M / L / XL";
    color_size_cont.appendChild(color);
    color_size_cont.appendChild(size);
    let price = document.createElement('span');
    price.textContent = new product().price;
    let add_to_cart = document.createElement('button');
    let price_add_btn = document.createElement('div');
    price_add_btn.className = "price-add-btn";
    price_add_btn.appendChild(price);
    price_add_btn.appendChild(add_to_cart);
    add_to_cart.textContent = "Add to Cart";
    let bot_card =  document.createElement('div');
    bot_card.className = "bot-card";

    card.appendChild(img_div);
    bot_card.appendChild(name);
    bot_card.appendChild(color_size_cont);
    bot_card.appendChild(price_add_btn);
    card.appendChild(bot_card);
    top_products.appendChild(card);
}
home_docs.after(top_products)
