window.theme = function() {
    const toggle = document.getElementById('theme-toggle')
    const icon = toggle.querySelector('i')

    const html = document.querySelector('html')

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')

        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
        toggle.setAttribute('title', 'Dark Mode')

        document.body.style.backgroundImage = "url('/assets/light.jpg')"
    } else {
        html.classList.add('dark')

        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
        toggle.setAttribute('title', 'Light Mode')

        document.body.style.backgroundImage = "url('/assets/dark.jpg')"
    }
}