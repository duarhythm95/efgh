let allnavs = document.querySelectorAll(".nav-div");
for (let i = 0; i < allnavs.length; i++) {
    allnavs[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("active-class")) {
            if (e.target.classList)
                e.target.classList.remove("active-class")
            return;
        }
        if (document.querySelector(".active-class")) {
            document.querySelector(".active-class").classList.remove("active-class");
        }
        e.target.classList.add("active-class");
    })
}

let btn = document.querySelector(".drpdown");
btn.addEventListener("click", function (e) {
    if (document.querySelector(".dropdown-list")) {
        document.querySelector(".dropdown-list").remove();
        document.querySelector(".active-class").classList.remove("active-class");
        return;
    }
    let div = document.createElement("div");
    div.classList.add("dropdown-list");
    div.innerHTML = `<a href="">Josh 1</a>
         <a href="">Josh 2</a>
         <a href="">Josh 3</a>
         <a href="">Josh 4</a>`;
    let hero = document.querySelector(".hero");
    hero.append(div);
})

document.querySelector(".hero").addEventListener("click", function (e) {
    if (document.querySelector(".dropdown-list")) {
        
        document.querySelector(".active-class").classList.remove("active-class");
        document.querySelector(".dropdown-list").remove();
    }
})



function getById(id) {
    return document.getElementById(id)
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

window.onload = function () {
    function initCarousel() {
        let carousels = getByClass("carousel")
        carousels.length && Array.from(carousels).forEach(function (carousel) {
            let slides = carousel.querySelectorAll(".slide");
            let slideCount = Math.min(slides.length, 6);
            let currentPosition = 0;
            let prevButton = carousel.querySelector("#next-button");
            let nextButton = carousel.querySelector("#prev-button");
            function removeSlides() {
                Array.from(slides).forEach(slide => {
                    if (slide.parentElement) {
                        slide.parentElement.removeChild(slide);
                    }
                });
            }

            function renderSlides() {
                removeSlides();
                for(let index = 0; index <  slideCount; index++) {
                    let slide = slides[(index+currentPosition) % slides.length];
                    carousel.insertBefore(slide, nextButton);
                }
            }

            prevButton.onclick = function () {
                currentPosition = (currentPosition - 1 + slides.length) % slides.length;
                renderSlides();
            }
            nextButton.onclick = function () {
                currentPosition = (currentPosition + 1) % slides.length;
                renderSlides();
            }
            removeSlides();
            renderSlides();
        })
    }

    initCarousel();
}