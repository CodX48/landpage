const calisthenicsTools = [
    {
        name: "Pull-Up Bar",
        description: "Essential for upper body workouts, especially pull-ups and hanging exercises.",
        price: 100,
        img: "https://cdn1.lacertosus.com/5087-thickbox_default/adjustable-pull-up-bar-pro-outdoor.webp"
    },
    {
        name: "Parallettes",
        description: "Small bars to practice dips, L-sits, push-ups, and more.",
        price: 100,
        img: "https://gravity.fitness/cdn/shop/products/001-GravityFitnessParallettes2023.jpg?v=1679909747&width=2048"
    },
    {
        name: "Gymnastic Rings",
        description: "Great for dips, pull-ups, and improving stability and grip strength.",
        price: 100,
        img: "https://thetibbarguy.com/cdn/shop/files/2023-04-20_TibBarGuy_Product_0053Large.jpg?v=1691156855&width=2048"
    },
    {
        name: "Resistance Bands",
        description: "Helpful for assisted exercises like pull-ups or dips, as well as for mobility work.",
        price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRon4eBw1uczMoMjkMTIJgkz3tSQo8pSihUjIdfnaDctc0g4XyNpRRMGjde7-NPSoHmr_k&usqp=CAU"
    },
    {
        name: "Dip Bars",
        description: "For bodyweight dips, rows, and leg raises.",
        price: 100,
        img: "https://www.gornation.com/cdn/shop/files/1-gornation-dip-bas.jpg?v=1693390362"
    },
    {
        name: "Ab Wheel",
        description: "Perfect for core strength and building a strong, stable core.",
        price: 100,
        img: "https://i.pinimg.com/564x/81/32/8a/81328ae416de8c416b61320d0aca8a8a.jpg"
    },
    {
        name: "Weighted Vest",
        description: "Adds extra resistance to bodyweight exercises as you progress.",
        price: 100,
        img: "https://i.pinimg.com/236x/60/d5/53/60d5537b23c4d8cad61e72ee5b3eee9f.jpg"
    },
    {
        name: "Yoga Mat",
        description: "Useful for floor exercises, stretching, and providing cushioning.",
        price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwqRlUNVBKx3YTLWwTVz9nkgj8cvrRmf17g&s"
    },
    {
        name: "Foam Roller",
        description: "Great for recovery, stretching, and reducing muscle soreness.",
        price: 100,
        img: "https://www.uzayspor.com/qazed2foto//1000/livepro-LP8230-45cm-foam-yoga-roller-1.jpg"
    },
    {
        name: "Jump Rope",
        description: "Ideal for cardio warm-ups, coordination, and leg conditioning.",
        price: 100,
        img: "https://contents.mediadecathlon.com/p1960432/k$52d50fd3248950a1b170d719ad1f366d/skipping-rope-500-rubber-domyos-8560960.jpg?f=1920x0&format=auto"
    },
    {
        name: "Push-Up Bars",
        description: "For deeper push-ups and reduced wrist strain.",
        price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNLSaPZQNYwcwNxXF981gSb3rfFQWIbKEvA&s"
    },
   
    {
        name: "Wrist Wraps",
        description: "Provides extra wrist support for moves like handstands or planches.",
        price: 100,
        img: "https://supplementler.mncdn.com/Assets/Supplementler/Thumbs/musclecloth_pro_wrist_wraps_2li_paket_siyah_74959.jpeg"
    },
    
    {
        name: "Ab Straps",
        description: "Straps attached to a pull-up bar for hanging leg raises with wrist support.",
        price: 100,
        img: "https://m.media-amazon.com/images/I/71N2MiUA0QL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        name: "Kettlebell",
        description: "Adds versatility to training for weighted calisthenics progressions.",
        price: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiYm11TRwUPiZo5lhEtiJq_EFQ0R6CkIp3g&s"
    },
    {
        name: "Doorway Anchors",
        description: "Enables using resistance bands even in small spaces.",
        price: 100,
        img: "https://stroops.com/wp-content/uploads/2021/05/Stroops-Toner-With-Foam-Door-Anchor-1500x1500.jpg"
    },
    {
        name: "Chin-Up Grips",
        description: "Extra grip tools to protect hands and enhance grip on bars and rings.",
        price: 100,
        img: "https://m.media-amazon.com/images/I/71hemWCnrLL._AC_UF1000,1000_QL80_.jpg"
    }
];
let productContainer = `<ul class="product-contaner" id="product-contaner">`

calisthenicsTools.forEach(ele => {
    let card =
    `<li class="product-card">
        <div class="product-content" id="product-content">
        <i class="far fa-heart love-icon"></i>
            <img src="${ele.img}" alt="${ele.name}"/>
            <div class="product_info">
                <h3>${ele.name}</h3>
                <p>${ele.description}</p>
                <div class="price_add">
                    <span>Price<br>$${ele.price}</span>
                    <form action="">
                        <input id = "add_product" type="submit" name="add_product" value="Add"/>
                    </form>
                </div>
            </div>
        </div>
    </li>`;
    productContainer += card; // Append each card to the container

});
productContainer += `</ul>`

export { productContainer };
