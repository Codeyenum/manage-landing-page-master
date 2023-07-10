let dotSelectors = document.querySelectorAll(".dots");
let carouselSlides = document.querySelectorAll(".slide");

for (let dotSelector of dotSelectors) {
    dotSelector.addEventListener("click", () => {
        for (let dotSelector of dotSelectors) {
            dotSelector.classList.remove("selected");
        }
        let slideOwner = dotSelector.classList[1];        
        dotSelector.classList.add("selected");
        for (let slide of carouselSlides) {
            slide.classList.remove("show");
            if (slideOwner === slide.classList[1]) {                
                slide.classList.add("show");                
            }
        }
    })
}

