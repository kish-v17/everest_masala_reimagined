// script.js
// -----------------------kevin-------------------------------
// document.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const blob = document.querySelector('.blob');

//     // Change the size of the blob based on scroll position
//     const size = 100 + (scrollY / 10);
//     blob.style.width = `${size}px`;
//     blob.style.height = `${size}px`;

//     // Change the color of the blob based on scroll position
//     const color = `hsl(${scrollY / 5}, 100%, 50%)`;
//     blob.style.backgroundColor = color;

//     // Change the shape of the blob (border-radius) based on scroll position
//     const borderRadius = 50 - (scrollY / 20);
//     blob.style.borderRadius = `${borderRadius}%`;
// });

//  ---------------------------end kevin----------------------------

// -----------------------kishan----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');

    document.addEventListener('mouseenter',() => {
        customCursor.style.display = 'block';
    });

    document.addEventListener('mouseleave',() => {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mousemove', (dets) => {
        customCursor.style.left = `${dets.pageX}px`;
        customCursor.style.top = `${dets.pageY}px`;
        // createParticle(dets.pageX, dets.pageY);
        for (let i = 0; i < 7; i++) {
            createParticle(dets.pageX, dets.pageY, true);
        }
    });

    document.addEventListener('click', (dets) => {
        for (let i = 0; i < 40; i++) {
            createParticle(dets.pageX, dets.pageY, true);
        }
    });

    function createParticle(x, y, burst = false) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const destinationX = (Math.random() - 0.5) * 60;
        const destinationY = (Math.random() - 0.5) * 60;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const animation = particle.animate([
            { transform: `translate(${destinationX +30}px, ${destinationY+40}px)`, opacity: 1 },
            { transform: `translate(${destinationX +40}px, ${destinationY + 30}px)`, opacity: 0 }
        ], {
            duration:  700,
            easing: 'ease-out'
        });

        animation.onfinish = () => {
            particle.remove();
        };
    }
});



// /* ---------------------------end kishan---------------------------- */


//            <-[ KEVIN ]->



const c=document.querySelector('.c');
c.height=window.innerHeight;
c.width=window.innerWidth;
const context=c.getContext("2d")
const framc=80

 const curFram=(index)=>`./assets/nop/${(index + 1).toString()}.jpeg`;
 
 const imgs=[];
 let box={frame:0};

 for(let i=0;i<framc;i++){
     const img=new Image();
     img.src=curFram(i)
     imgs.push(img)
 }

 gsap.to(box,{
     frame:framc - 1,
     snap:"frame",
     ease:"none",
     scrollTrigger:{
         scrub:true,
         pin:"canvas",
         end:"500%",
     },
     onUpdate:render,
 })
 ScrollTrigger.create({
    trigger: ".mcanva",
    start: "top top",
    end: `bottom bottom`,
    pin: "#explore",
    pinSpacing: false
});


imgs[0].onload=render;

function render(){
    context.clearRect(0,0,c.width,c.height)
    context.drawImage(imgs[box.frame],0,0,c.width,c.height);
    
}

function scr(){
    window.scrollTo({
        top: 4560,
        behavior: 'smooth'
      });
}
 

// loder

let load = setInterval(() => {
    if (document.readyState == "complete") {
        stoploader()
        clearInterval(load)
    }

}, 4000);

function stoploader() {
    const loader = document.querySelector('.loader')
    loader.style.display = "none"
}


function scrollx(e){
    console.log(e)
const con=document.querySelector('.pconteiner')
con.style.transform=`translateX(${e})`;
}


function fill(e) {
    e.classList.remove("ri-heart-line")
    e.classList.add("ri-heart-fill")
    e.style.color = "red";
}
function fillr(e) {
    e.style.color = "unset";
    e.classList.remove("ri-heart-fill")
    e.classList.add("ri-heart-line")
}
function tfill(e) {
    if (e.classList.contains("ri-heart-line")) {
        fill(e)
    } else {
        fillr(e)
    }
}

const mnu=document.querySelector(".menu");

function cls(){
    mnu.style.left="-100%"
}
function menu() {
    let micn=document.querySelector("#micn")
    micn.classList.toggle("change");
    
    if(mnu.style.left=="0%" ){
    cls();
    }
    else{
    mnu.style.left="0%"
    }  
}
function toggleContent(contentId) {
    var contents = document.getElementsByClassName('content-section');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
}

var content = document.getElementById(contentId);
content.style.display = 'flex';
}
//            <-[END | KEVIN ]->    