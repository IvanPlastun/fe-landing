import initMap from "./map/Map"

initMap()
initTweetSlider()
initQuoteSlider()
initTestimonialsSlider()

const burgerMenu = document.querySelector("#burger-menu")

// функция для отображения мобильного меню
function activeMenu () {
    const lineTop = document.querySelector("#line-top")
    const lineMiddle = document.querySelector("#line-middle")
    const lineBottom = document.querySelector("#line-bottom")
    const overlay = document.querySelector("#overlay")

    lineTop.classList.toggle("header-nav-burger__line--top-active")
    lineMiddle.classList.toggle("header-nav-burger__line--middle-active")
    lineBottom.classList.toggle("header-nav-burger__line--bottom-active")
    overlay.classList.toggle("header-nav-overlay--open")

    document.body.classList.toggle("locked")
}

burgerMenu.addEventListener("click", activeMenu)


// функция инициализации слайдера для твитов
function initTweetSlider () {
    const tweetSliderConfig = {
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 100,
        center: true,
        dots: true,
        dotsClass: "tweet-slider-points",
        dotClass: "tweet-slider-dot"
    }

    $(".tweet-slider").owlCarousel(tweetSliderConfig)
}

// функция инициализации слайдера для цитат
function initQuoteSlider () {
    const quoteSliderConfig = {
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 100,
        center: true,
        dots: true,
        dotsClass: "quote-points",
        dotClass: "quote-points__point"
    }

    $(".quote-carousel").owlCarousel(quoteSliderConfig)
}

// функция инициализации слайдера с отзывами клиентов
function initTestimonialsSlider () {
    const testimonialsSliderConfig = {
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        dotsClass: "testimonials-dots",
        dotClass: "testimonials-dots__dot",
        responsive: {
            0: {
                items: 1,
                margin: 50,
            },
            768: {
                items: 2,
                
            },
            992: {
                items: 3
            }
        }
    }

    $(".testimonials-clients").owlCarousel(testimonialsSliderConfig)
}

// Фильтер работ в портфолио
const filterControls = document.querySelector(".portfolio-filter")

function viewWorks (selectedCategory, work) {
    work.classList.add("hide")
    work.classList.remove("active")

    if (selectedCategory === work.dataset.category) {
        event.target.classList.add("active")
        work.classList.remove("hide")
        work.classList.add("active")
        work.style.cssText = ""
    }
}

function filterWorks (event) {
    const selectedCategory = event.target.dataset.selectCategory
    const worksItems = document.querySelectorAll(".portfolio-box-item")
    const buttonsFilter = document.querySelectorAll(".portfolio-filter__select-category")

    buttonsFilter.forEach(button => {
        button.classList.remove("active")
    })

    worksItems.forEach(item => {
        if (selectedCategory === "website") {
            viewWorks(selectedCategory, item)
        } else if (selectedCategory === "graphic") {
            viewWorks(selectedCategory, item)
        } else if (selectedCategory === "identity")  {
            viewWorks(selectedCategory, item)
        } else if (selectedCategory === "mobile apps") {
            viewWorks(selectedCategory, item)
        } else if (selectedCategory === "all") {
            event.target.classList.add("active")
            item.style.cssText = "animation-name: flipInX; animation-duration: 1s;"
            item.classList.remove("active")
            item.classList.remove("hide")
        }
    })
}

filterControls.addEventListener("click", event => {
    filterWorks(event)
})

const scrollElement = $("#scroll")
scrollElement.bind("click.smoothscroll", function (e) {
    e.preventDefault()
    
    const target = this.hash,
    $target = $(target)
    
    $("html, body").stop().animate({
    "scrollTop": $target.offset().top
    }, 1000, "swing", function () {
        window.location.hash = target
    })
})