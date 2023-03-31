export async function init() {
    let quote = localStorage.getItem('quote')
    let author = localStorage.getItem('author')

    if (!quote) {
        const data = await new_quote();
        quote = data.content;
        author = data.author;
    }

    const text = document.getElementById('text')
    const attr = document.getElementById('attribution')

    text.innerHTML = ''
    attr.innerHTML = ''

    for (const word of quote.trim().split(/\s+/)) {
        const block = document.createElement('span')

        for (const ch of word + ' ') {
            const letter = document.createElement('span')
            letter.innerHTML = ch

            block.appendChild(letter)
        }

        text.appendChild(block)
    }

    attr.innerHTML = `- ${author}`

    const input = document.getElementById('input')

    input.addEventListener('input', update)
    input.value = ''

    const caret = document.getElementById('caret')
    caret.hidden = true
}

export async function new_quote() {
    const res = fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('quote', data.content)
            localStorage.setItem('author', data.author)
            return data
    })

    return res
}

function update() {
    const text = document.getElementById('text')
    const input = document.getElementById('input')

    const words = input.value.split(/\s+/)

    const target = text.childNodes[words.length - 1]
    const last = words[words.length - 1]

    for (const letter of target.childNodes) {
        letter.className = ''
    }

    for (var i = 0; i < Math.min(last.length, target.childNodes.length); i++) {
        const letter = target.childNodes[i]
        const typed = last[i]

        if (letter.innerHTML == typed) {
            letter.className = 'text-light-second dark:text-dark-second'
        } else {
            letter.className = 'text-light-accent dark:text-dark-accent'
        }
    }

    // update caret
    caret.hidden = false

    const pos = target.childNodes[
        Math.min(
            last.length,
            target.childNodes.length - 1
        )
    ].getBoundingClientRect()

    var x;
    if (last.length <= target.childNodes.length - 1) {
        x = `${pos.left}px`
    }
    else {
        x = `${pos.right}px`
    }

    caret.style.left = x
    caret.style.top = `${pos.top}px`

    // check for end
    if (
        words.length == text.childNodes.length &&
        last.length + 1 >= target.childNodes.length
    ) {
        localStorage.removeItem('quote');
        localStorage.removeItem('author');

        init()
    }
}