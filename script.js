// const navLinks = document.querySelectorAll('nav li a')
const themeSelector = document.getElementById('theme-selector')

themeSelector.addEventListener('change', event => {
    console.log(document.querySelector('select#theme-selector option:checked').value)
    document.querySelector('html').classList.toggle('dark')
})

window.onhashchange = function() {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => section.classList.add('hidden'))
    const section = document.querySelector(location.hash)
    section.classList.remove('hidden')
}