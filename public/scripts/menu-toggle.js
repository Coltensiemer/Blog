
const menuBtnClose = document.getElementById('menu-btn-close'); 
const menuBtnOpen = document.querySelector('.menu-btn'); 

const navItems = document.querySelectorAll(".nav-item")

const navUI = document.querySelector(".nav"); 




// EVENT Listener 

//OPEN Window
menuBtnOpen.addEventListener('click', (e)=> { 
e.preventDefault(); 

    navUI.classList.add('display'); 

} )


// Close Menu
menuBtnClose.addEventListener('click', (e)=> { 
    e.preventDefault(); 

    if (navUI.classList.contains('display')) {
    navUI.classList.remove('display'); } 

})

// Nav Items inside NAV to close menu once clicked. 
navItems.forEach(e => e.addEventListener('click', ()=>{
    if (navUI.classList.contains('display')) {
        navUI.classList.remove('display'); }
}))