console.log("index.js ok");

let btn = document.querySelector(".btn")

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        lefft: 0,
        behavior: "smooth"
    })

})
