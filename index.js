let dotSelectors = document.querySelectorAll(".dots");
let carouselSlides = document.querySelectorAll(".slide");
let carousel = document.querySelector(".testimonial-carousel");
const slideArray = ["one", "two", "three", "four"];
// current slide counter
let currentSlide = 0;

// loop through slides and set each slides translateX property to index * 100% 
carouselSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 110}%)`;
});

// desktop carousel 
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
        currentSlide = slideIndex

        carouselSlides.forEach((slide, index) => {
            slide.style.transform = `translateX(${110 * (index - currentSlide)}%)`;
        });
    });
}

// mobile carousel
for (let dotSelector of dotSelectors) {
    dotSelector.addEventListener("click", () => {
        // to clear selected dot styling then add to new current dot
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

const email = document.getElementById("Email");
const form = document.querySelector(".update-form");

   // success and error assignment functions
   function error(input, message) {
    const inputField = input.parentElement
        
    // styling class swap
    inputField.classList.remove("success")
    inputField.classList.add("error")

    // error message handling
    error_message = inputField.querySelector("small")
    error_message.innerHTML = `<em>${message}</em>`      
 }

 function success(input) {
    const inputField = input.parentElement
    
    // styling class swap
    inputField.classList.remove("error")
    inputField.classList.add("success")

    // error message handling
    error_message = inputField.querySelector("small")
    error_message.innerHTML = ""   
 }

    // validation functions
    function checkEmail(input) {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (input.value.trim() === "") {
           return error(input, `${input.id} cannot be empty`);
        }
        if (regEx.test(input.value.trim())) {
           success(input);
        }
        else {
           error(input, 'Please insert a valid email');
        }
     }

     form.addEventListener("submit", (e) => {
        e.preventDefault()        
        let is_email_valid = checkEmail(email);
        if (is_email_valid) {
           
        }      
     })