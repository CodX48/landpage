import { footer } from "../JsHome/footer.js";
import { calisthenicsInfo } from "./calisthenicsInfo.js";

document.getElementById('doc_footer').innerHTML = footer;

let info ='';

calisthenicsInfo.forEach((e)=>{
 info+= `<div> <h2 class="header">${e.header}</h2><p class="tip">${e.tip}</p><ul> ${e.list.map((ele) => (`<li><p><strong>${ele[0]}</strong>${ele[1]}</p></li>`)).join("")} </ul> </div>`
})

document.getElementById('content').innerHTML = info;

let ListEle = document.querySelectorAll('.list ul li');

ListEle.forEach((e)=>{
    e.addEventListener('click',()=>{
        ListEle.forEach(ele => ele.classList.remove('active'));
        
        e.classList.add('active')
    })
})
