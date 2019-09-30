let lazyLoading = document.getElementsByClassName("lazy-load");

let slideLeftEl = document.getElementsByClassName("slideLeft");
let slideRightEl = document.getElementsByClassName("slideRight");

window.addEventListener("scroll", () => {
    for(let i = 0; i<slideLeftEl.length; i++){
        if(slideLeftEl[i].offsetTop< window.innerHeight + window.pageYOffset + 100){
            slideLeftEl[i].classList.add("slide-from-left")
        }
    }
    for(let i = 0; i<slideLeftEl.length; i++){
        if(slideRightEl[i].offsetTop< window.innerHeight + window.pageYOffset + 100){
            slideRightEl[i].classList.add("slide-from-right")
        }
    }
    for (let i = 0; i < lazyLoading.length; i++) {
        if(lazyLoading[i].offsetTop < window.innerHeight + window.pageYOffset + 100){
            lazyLoading[i].classList.add("lazy-loading");

        }
    }
})