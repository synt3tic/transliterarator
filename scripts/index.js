const button = document.querySelector('.input-box__button')
const ruField = document.querySelector('#input')
const enField = document.querySelector('#output')
const alphabet = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shc',
    'ъ': '"',
    'ы': 'y',
    'ь': "'",
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
}


function translit(str){
    return str.split('').map((el) => {
        if (!!el.match(/[А-Я]/)) {
            return alphabet[el.toLowerCase()].toUpperCase()
        } else {
            if (alphabet[el]) {
            return alphabet[el]
        } else {
            return el
        }
        }
    }).join('')
}

button.addEventListener('click', () => {
    let inputText = document.querySelector('.input-box__input')
    let ruDiv = document.createElement('div')
    let enDiv = document.createElement('div')
    ruField.appendChild(ruDiv)
    enField.appendChild(enDiv)

    ruDiv.textContent = inputText.value
    enDiv.textContent = translit(inputText.value)
    ruDiv.className = 'new-text'
    enDiv.className = 'new-text'
    inputText.value = ''
})