let photos = document.createElement('div')
photos.className = "photo-list";
let PhotoList = ['https://i.pinimg.com/564x/22/69/0d/22690daaa122632e7dee3ffce13bccb5.jpg','https://i.pinimg.com/564x/7f/4f/55/7f4f554cdcabba7d00866171e27de60d.jpg','https://i.pinimg.com/564x/a8/4e/49/a84e49a41433d86e830fd31b6b8eb212.jpg','https://i.pinimg.com/564x/1c/8c/28/1c8c283a7714c31c76286c098ff77464.jpg','https://i.pinimg.com/736x/a2/94/96/a294960d3f02a6237a19b3a9b96f332d.jpg','https://i.pinimg.com/564x/c2/b6/a6/c2b6a6cbfc3f6c3e9c1159c012b2074c.jpg','https://i.pinimg.com/564x/ac/a5/ea/aca5ea6221377ac7bb40ba9cd26f3f29.jpg']

PhotoList.forEach(ele =>{
    let img = document.createElement("img");
    img.src = ele;
    photos.appendChild(img);
});

export {photos}
