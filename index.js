const hamburgerIcon = document.getElementById('hamburger-icon')
const closeIcon = document.getElementById('close-icon')
const navBar =  document.getElementById('nav-bar')
const navList = document.getElementById('nav-list')

hamburgerIcon.addEventListener('click', () => {
    navBar.classList.toggle('nav-bar')
    navBar.classList.remove('hidden')
    navList.classList.add('nav-list')

})

closeIcon.addEventListener('click', () => {
    navBar.classList.remove('nav-bar')
    navBar.classList.add('hidden')
})
