import * as game from './game.mjs'

window.onload = function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            game.init()
        }

        const input = document.getElementById('input')

        input.focus()
        document.body.style.cursor = 'none'
    })

    document.addEventListener('mousemove', function() {
        document.body.style.cursor = 'auto'
    })

    game.init()
}

window.theme = function() {
    const toggle = document.getElementById('theme-toggle')
    const icon = toggle.querySelector('i')

    const html = document.querySelector('html')

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')

        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
        toggle.setAttribute('title', 'Dark Mode')

        document.body.style.backgroundImage = "url('assets/light.jpg')"
    } else {
        html.classList.add('dark')

        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
        toggle.setAttribute('title', 'Light Mode')

        document.body.style.backgroundImage = "url('assets/dark.jpg')"
    }
}