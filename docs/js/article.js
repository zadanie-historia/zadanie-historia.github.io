let lazyLoading = document.getElementsByClassName("lazy-load");

window.addEventListener("scroll", () => {

    for (let i = 0; i < lazyLoading.length; i++) {
        console.log(lazyLoading[i].offsetTop, window.innerHeight + window.pageYOffset + 100)
        if(lazyLoading[i].offsetTop < window.innerHeight + window.pageYOffset + 150){
            lazyLoading[i].classList.add("lazy-loading");

        }
    }
})
let lazyLoad = el =>{
}