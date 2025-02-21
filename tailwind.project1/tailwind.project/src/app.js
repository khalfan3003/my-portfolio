const humburger = document.querySelector("#humburger")
const menu = document.querySelector("#menu")
const hlinks = document.querySelectorAll("#hlinks")


humburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")

})

hlinks.forEach(link=>{
link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")

})

})

