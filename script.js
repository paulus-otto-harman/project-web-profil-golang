const themeSelector = document.getElementById('theme-selector')
const loader = document.getElementById('loader')
const skillsContainer = document.getElementById('skills')

themeSelector.addEventListener('change', event => {
    console.log(document.querySelector('select#theme-selector option:checked').value)
    document.querySelector('html').classList.toggle('dark')
})

window.onhashchange = function() {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => section.classList.add('hidden'))
    const section = document.querySelector(location.hash)
    section.classList.remove('hidden')

    switch (location.hash) {
        case '#skill':
            show('loader')
            skillsContainer.textContent = ''
            loadSkills()
            break;
    }
}

function loadSkills() {
    const baseURL = 'https://ezdz.xyz'
    fetch(`${baseURL}/mock-api`, {
        method:'get'
    }).then(async function(response) {
        const { data:skills } = await response.json()

        skills.forEach( ({ skill, level }) => {
            console.log(skill)
            console.log(level)
            const skillName = document.createElement('h4')
            skillName.textContent = skill
            const skillLevel = document.createElement('div')
            skillLevel.classList.add('progress-bar', `level-${level}`)

            const mySkill = document.createElement('article')
            mySkill.appendChild(skillName)
            mySkill.appendChild(skillLevel)

            skillsContainer.appendChild(mySkill)
        })
        hide('loader')
    })
}

function hide(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function show(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove(['hidden'])
}

