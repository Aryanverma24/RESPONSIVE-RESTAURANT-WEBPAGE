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
console.log(searchbtn);
// const searchContainer= documment.querySelector("[data-search-container]");

const searchContainer1= document.getElementsByClassName("search-container");
console.log(searchContainer1);

// const searchSubmission= documment.querySelector("[data-search-submit-btn]");

const searchClose= documment.getElementsByClassName("search-close-btn");
console.log(searchClose);
const searchBoxElements = [searchbtn,searchContainer1,searchClose];

for(let i=0;i<searchBoxElements.length;i++){
    searchBoxElements[i].addEventListener("click", function(){
        searchContainer1.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}


// delivery boy

const delivery_boy = document.querySelector("[data-delivery-boy]");
console.log(delivery_boy);