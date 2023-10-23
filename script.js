const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})



const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >=200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY>=500)scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll') 

}
window.addEventListener("scroll",scrollTop)

// const themeButton = document.getElementById("theme-button");
// const darkTheme = 'dark-theme'wq2
// const iconTheme = 'toggle-right'

// const selectTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = ()=>document.body.classList(darkTheme) ?'dark': 'light'
// const getCurrentIcon = ()=>themeButton.classList.contains(iconTheme) ? 'toggle-left': 'toogle-right'

// if(selectTheme){
//     document.body.classList[selectTheme ==='dark' ? 'add': 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'toggle-left' ? 'add': 'remove'](iconTheme);

//     themeButton.addEventListener('click',()=>{
//         document.body.classList.toggle(darkTheme)
//         themeButton.classList.toggle(iconTheme)

//         localStorage.setItem('selected-theme',getCurrentTheme)
//         localStorage.setItem('selected-icon',getCurrentIcon)
//     })
// }

    //============== SCROLL REVEAL ANIMATION======================//
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal('.home_data , .home_img, .decoration_data, .accessory_content , .footer_content',{
    origin: 'top',
    interval: 200
})
sr.reveal('.share_img , .send-content',{
    origin: 'left'
})
sr.reveal('.share_data',{
    origin: 'right'
})