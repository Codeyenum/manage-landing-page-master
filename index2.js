let dotSelectors = document.querySelectorAll(".dots");
let carouselSlides = document.querySelectorAll(".slide");
let carousel = document.querySelector(".carousel");
const slideArray = ["one", "two", "three"];
// current slide counter
let currentSlide = 0;

// loop through slides and set each slides translateX property to index * 100% 
carouselSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}vw)`;
});

for (let dotSelector of dotSelectors) {    
    dotSelector.addEventListener("click", () => {
        let slideOwner = dotSelector.classList[1];

        // to clear selected dot styling then add to new current dot
        for (let dotSelector of dotSelectors) {
            dotSelector.classList.remove("selected");            
        }           
        dotSelector.classList.add("selected");
        
        // to clear selected slide styling then add to new current slide
        for (let slide of carouselSlides) {
            slide.classList.remove("selected");
            if (slideOwner === slide.classList[1]) {
                slide.classList.add("selected");                             
            }
        }

        let slideNum = dotSelector.classList[1];
        let slideIndex = slideArray.indexOf(`${slideNum}`)
        let currentSlide = slideIndex

        carouselSlides.forEach((slide, index) => {            
            slide.style.transform = `translateX(${100 * (index - currentSlide)}vw)`;
        });
    })
}

for(let slide of carouselSlides) {
    slide.addEventListener("mouseover", (e) => {
        // carousel.scrollLeft = e.pageX;
        console.log(e.pageX);
    })
}
