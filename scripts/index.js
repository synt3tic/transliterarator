const button = document.querySelector('.input-box__button');
const ruField = document.querySelector('#input');
const enField = document.querySelector('#output');
const inputText = document.querySelector('.input-box__input');

const alphabet = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
    'ш': 'sh', 'щ': 'shc', 'ъ': '"', 'ы': 'y', 'ь': "'",
    'э': 'e', 'ю': 'yu', 'я': 'ya',
};


const translit = (str) => {
    return str.split('').map((char) => {
        const isUpperCase = char.match(/[А-Я]/);
        const lowerChar = char.toLowerCase();
        const translatedChar = alphabet[lowerChar] || char;

        return isUpperCase ? translatedChar.toUpperCase() : translatedChar;
    }).join('')
}

const createTextBlock = (container, text) => {
    const div = document.createElement('div');
    div.textContent = text;
    div.className = 'new-text';
    container.appendChild(div);
};

button.addEventListener('click', () => {
    const text = inputText.value.trim();

    if (!text) {
        return;
    }

    createTextBlock(ruField, text);
    createTextBlock(enField, translit(text));
    inputText.value = '';
});