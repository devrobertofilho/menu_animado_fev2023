const navbar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')

allLi.forEach(  (li, index) => {

    li.addEventListener("click", e => {
        navbar.querySelector(".activelist").classList.remove("activelist")
        li.classList.add("activelist")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
})
})

