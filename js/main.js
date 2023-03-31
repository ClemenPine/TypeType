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