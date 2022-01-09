const btnTranslator = document.querySelector("#btn-translate");

const txtInput = document.querySelector("#txt-input");

const outputDiv = document.querySelector("#output");


const serverURL = "https://api.funtranslations.com/translate/navi.json";

const getTranslationURL = text => `${serverURL}?text=${text}`;


const clickHandler = () => {
    let inputText = txtInput.value;

    fetch (getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText;
        })

}

btnTranslator.addEventListener("click", clickHandler);