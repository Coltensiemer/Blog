'use strict'

const sections = document.querySelectorAll('section'); 


let options = { 
    root: null, 
    threshold: 0, 
    rootMargin: 1.0
}

const observer = new IntersectionObserver(function (entires, observer) { 
    entires.forEach(entry => { 
        console.log(entry.target);
    })
}, options)




sections.forEach(section => {
observer.observe(section);
}) 