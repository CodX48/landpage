import { footer } from "../JsHome/footer.js";
import { nav } from "../JsHome/header_nav.js";
import { calisthenicsInfo } from "./calisthenicsInfo.js";

document.getElementById('nav').innerHTML = nav
document.getElementById('doc_footer').innerHTML = footer;

let info ='';

calisthenicsInfo.forEach((e)=>{
 info+= `<div id="${e.id}" scroll="${e.id}"> <h2 class="header">${e.header}</h2><p class="tip">${e.tip}</p><ul> ${e.list.map((ele) => (`<li><p><strong>${ele[0]} :</strong>${ele[1]}</p></li>`)).join("")} </ul> </div>`
})

document.getElementById('content').innerHTML = info;

let ListEle = document.querySelectorAll('.list ul li');

ListEle[0].classList.add('active');

ListEle.forEach((e)=>{
    e.addEventListener('click',()=>{
        ListEle.forEach(ele => ele.classList.remove('active'));
        
        e.classList.add('active')
    })
})

//scroll event 
let Sections = document.querySelectorAll('.content div');
window.addEventListener('scroll',()=>{
    const scroll = window.scrollY;
    Sections.forEach(ele =>{
        const SectionTop = ele.offsetTop;
        const SectionHight = ele.offsetHeight;
        if(scroll >= SectionTop && (SectionHight + SectionTop) > scroll){
            ListEle.forEach(e=>{
                e.getAttribute('scroll') == ele.getAttribute('scroll') ? e.classList.add('active') : e.classList.remove('active')
            })
        }
    })
});