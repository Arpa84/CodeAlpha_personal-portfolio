window.addEventListener("scroll",()=>{
document.getElementById("nav")
.classList.toggle("scrolled",window.scrollY>50)

document.querySelectorAll(".section").forEach(sec=>{
const top=sec.getBoundingClientRect().top

if(top<window.innerHeight-100){
sec.classList.add("show")
}

})
})

function scrollToProjects(){
document.getElementById("projects")
.scrollIntoView()
}