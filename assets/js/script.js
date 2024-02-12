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

// haeder sticky

const header=document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
});


// search box toggle

const searchbtn=document.querySelector("[data-search-btn]");
const searchContainer= documment.querySelector("[data-search-container]");
const searchSubmission= documment.querySelector("[data-search-submit-btn]");
const searchClose= documment.querySelector("[data-search-close-btn]");

const searchBoxElements = [searchbtn,searchContainer,searchClose];

for(let i=0;i<searchBoxElements.length;i++){
    searchBoxElements[i].addEventListener("click", function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}


// delivery boy

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function(){
    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
    if(deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250){
        let activeScrollPos = window.scrollY;

        if(lastScrollPos < activeScrollPos){
            deliveryBoyMove++;
        }
        else{
            deliveryBoyMove--;
        }

        lastScrollPos = activeScrollPos;

        deliveryBoy.style.transform = 'translateX(${deliveryBoyMove}px)';
    }
});