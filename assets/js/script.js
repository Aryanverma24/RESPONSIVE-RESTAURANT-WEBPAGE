'use strict';

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navlink = document.querySelector("[data-nav-link]");
const menutoggle= document.querySelector("[data-nav-toggle-btn]");

menutoggle.addEventListener("click", function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for(let i=0;i<navlink.lentgh;i++){
    navlink[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        menutoggle.classList.toggle("active");
    });
}

// haeder sticky & back to top btn

const header=document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }
    else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


// search box toggle

const searchbtn=document.querySelector("[data-search-btn]");
const searchContainer= document.querySelector("[data-search-container]");
const searchSubmission= document.querySelector("[data-search-submit-btn]");
const searchClose= document.querySelector("[data-search-close-btn]");

const searchBoxElements = [searchbtn,searchContainer,searchClose];

for(let i=0;i<searchBoxElements.length;i++){
    searchBoxElements[i].addEventListener("click", function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}


// delivery boy

const deliveryBoy = document.querySelector("[data-delivery-boy]");
console.log(deliveryBoy)
let deliveryBoyMove = -50;
let lastScrollPos = 0;

window.addEventListener("scroll", function(){
    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
    console.log(deliveryBoyTopPos);
    if(deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250){
        let activeScrollPos = window.scrollY;
        console.log(activeScrollPos)

        if(lastScrollPos < activeScrollPos){
            deliveryBoyMove++;
        }
        else{
            deliveryBoyMove--;
        }
        // console.log(`${a}`)

        lastScrollPos = activeScrollPos;

        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
});