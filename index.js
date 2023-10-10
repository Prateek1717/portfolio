
// For Animation Text

let dynamictext = document.querySelector(".main-content-animation");
let words = ["Frontend Developer","Web Designer"];
let wordindex = 0;
let charindex = 1;
let deleting = false;

let typewriter = ()=>{
    const currentword = words[wordindex];
    const currentchar = currentword.substring(0,charindex);
    // error here

    dynamictext.textContent = currentchar;
    dynamictext.classList.add("stop-blinking");
    
    if(!deleting && charindex < currentword.length){
        charindex++;
        setTimeout(typewriter,300);
    }
    else if(deleting && charindex > 0){
        charindex--;
        setTimeout(typewriter,200);
    }
    else{
        deleting = !deleting;
        dynamictext.classList.remove("stop-blinking");
        wordindex =!deleting ? (wordindex +1) % words.length :wordindex;
        setTimeout(typewriter,1000);
    }
}
    // typewriter();    


// For Hamburger

let navmenu = document.querySelector(".nav-menu");
let hamburger = document.querySelector(".hamburger");
let crossnavsign= document.querySelector(".cross-nav-sign");

hamburger.addEventListener("click",function(){
    navmenu.classList.add("active");
});

crossnavsign.addEventListener("click",function(){
    navmenu.classList.remove("active");
});

// For Nav-Links

let navlinks = document.querySelectorAll(".nav-links").forEach((e) =>{
    e.addEventListener("click",function(){
        navmenu.classList.remove("active");
    });
});

// For Portfolio Section

let bigc1 = document.querySelector(".big-cover1");
let bigc2 = document.querySelector(".big-cover2");
let bigc3 = document.querySelector(".big-cover3");
let bigimgsec = document.querySelector(".big-image-section");
let bigcrosssign = document.querySelector(".big-sign-cross");

function forimage1(){
    bigc1.style.display= "block";
    bigc2.style.display= "none";
    bigc3.style.display= "none";
    bigimgsec.classList.add("active");
}

function forimage2(){
    bigc1.style.display= "none";
    bigc2.style.display= "block";
    bigc3.style.display= "none";
    bigimgsec.classList.add("active");
}

function forimage3(){
    bigc1.style.display= "none";
    bigc2.style.display= "none";
    bigc3.style.display= "block";
    bigimgsec.classList.add("active");
}

function removebigse(){
    bigimgsec.classList.remove("active");
}

window.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        bigimgsec.classList.remove("active");
    }
});


// Testimonial Section

let slides = document.getElementsByClassName("slides");
let circles = document.getElementsByClassName("circle-point");
let currenttestimonial = 0;
console.log('Recahing in testimonial')


function changetestimonial(pra){
    if(pra >=slides.length){
        pra=0;
    }    

    if(pra < 0){
        pra = slides.length - 1;
    }

    slides[currenttestimonial].classList.toggle("active");
    circles[currenttestimonial].classList.toggle("active");
    slides[pra].classList.toggle("active");
    circles[pra].classList.toggle("active");
    currenttestimonial=pra;
}



document.querySelectorAll(".circle-point").forEach((val,ind)=>{
    val.addEventListener("click",function(){
        if(currenttestimonial !== ind){
            changetestimonial(ind);
        }
    });
});


window.onload = setInterval(()=>{
    changetestimonial(currenttestimonial + 1);
},3000);