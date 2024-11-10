let img_urls = [{tut: "Upper body calisthenics exercises focus on developing strength, muscle endurance, and stability in the chest, shoulders, arms, and back. These exercises primarily use pushing and pulling motions that engage multiple muscle groups. Key benefits of upper body exercises include enhanced grip strength, improved posture, and increased shoulder and arm stability, which are important for balance and control in both daily activities and advanced calisthenics movements.", img:'https://i.pinimg.com/564x/ae/5b/95/ae5b95d5355578febfa64e9a70d4530a.jpg'},{tut: "Core exercises are essential in calisthenics, as the core stabilizes and controls the body during complex movements. A strong core enhances balance, supports the spine, and aids in preventing injuries. In addition to targeting the abs, calisthenics core exercises focus on engaging the obliques, lower back, and hip flexors, improving your ability to perform other exercises with proper form and power." ,img:'https://i.pinimg.com/564x/1d/bb/e2/1dbbe20182c893ec307e932db7f49a31.jpg'},{tut:"Lower body exercises in calisthenics focus on building strength, flexibility, and balance in the legs, hips, and glutes. Since these exercises use bodyweight resistance, they often improve muscle endurance and coordination rather than bulky muscle growth. Lower body training supports overall athleticism, helps maintain stability during complex movements, and builds a strong foundation for jumping, running, and dynamic calisthenics skills.",img:"https://i.pinimg.com/564x/8e/c3/a6/8ec3a6016e9af60f7ebb59052e75528f.jpg"}]

//main_cont_tips
let main_cont_tips = document.createElement('div')
main_cont_tips.className = "main-cont-tips";
let tip_mess = document.createElement('h1');
tip_mess.className = "head-mess"
tip_mess.textContent = "Quick Start"
main_cont_tips.appendChild(tip_mess);

//main_tutorial
let main_tutorial = document.createElement('div');
img_urls.forEach(ele => {
    let tip = document.createElement('div');
    tip.className = "Quick-tip"
    let tut = document.createElement('p');
    tut.textContent = ele.tut;
    let img = document.createElement('img');
    img.src = ele.img;
    tip.appendChild(tut)
    tip.appendChild(img)
    main_tutorial.appendChild(tip)
})
main_cont_tips.appendChild(main_tutorial)

export {main_cont_tips}