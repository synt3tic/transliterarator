const button = document.querySelector('.input-box__button')
const ruField = document.querySelector('.result-box__input')
const enField = document.querySelector('.result-box__output')
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
    ' ': ' ',
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Yo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'C',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Shc',
    'Ъ': '"',
    'Ы': 'Y',
    'Ь': "'",
    'Э': 'E',
    'Ю': 'Yu',
    'Я': 'Ya',
}

function translit(str){
    let strArray = str.split('')
    return strArray.map((el) => {
        if(alphabet.hasOwnProperty(el)){
            return el = alphabet[el]
        }else{
            return el
        }
    }).join('')
}

button.addEventListener('click', () => {
    const inputText = document.querySelector('.input-box__input').value
    let ruDiv = document.createElement('div')
    let enDiv = document.createElement('div')

    ruField.appendChild(ruDiv)
    enField.appendChild(enDiv)

    ruDiv.textContent = inputText
    enDiv.textContent = translit(inputText)
    ruDiv.className = 'new-text'
    enDiv.className = 'new-text'
    
})