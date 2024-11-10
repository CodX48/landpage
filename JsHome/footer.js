const footerSections = [
    {
      title: "Entity types",
      points: ["Knowledge base", "Security", "Privacy Policy", "Partners", "About us", "FAQs"]
    },
    {
      title: "Services",
      points: ["Contact Us", "Press", "Payroll", "Library", "Blog", "Help Center"]
    },
    {
      title: "Resources",
      points: ["Pricing", "FAQs", "Contact Support", "Privacy Policy", "Terms"]
    },
    {
      title: "Support",
      points: ["Contact", "Affiliates", "Sitemap", "Cancelation Policy", "Pricing"]
    }
  ];
  
function footer_info(){
    let ul = '';
    footerSections.forEach(ele =>{
        ul += `<ul><h3>${ele.title}</h3>`
        ele.points.forEach(e =>{
            ul += `<li>${e}</li>`
        })
        ul+= `</ul>`
    })
    return ul;
}

let _footerSections = footer_info();

let footer = 
`
<div class="subscribe">
    <h2>${"subscribe".toUpperCase()} & Take 40% Discount For Your First Order</h2>
<form action="">

<input class="sub_mail" type = "text" name = "text" placeholder="Enter your Email"></input>
<input class="sub_submit" type = "submit" name="Send"></input>

</form>
</div>

<div class = "contact">
<div  class="contacts_info">
    <p>+90 531 598 63 69</p>
    <p>mostafatur207h@gmail.com</p>
    <div class = "social-media"> 
    <i class="bi bi-facebook"></i>     
    <i class="bi bi-twitter"></i>     
    <i class="bi bi-instagram"></i>   
    <i class="bi bi-linkedin"></i> 
    </div>
</div>
    <div class="footer-sections">
    ${_footerSections}
    </div>
</div>
`

document.getElementById(`footer-cont`).innerHTML = footer;

