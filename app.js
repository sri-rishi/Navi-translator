var btnTranslator = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch (getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText;
        })

}

btnTranslator.addEventListener("click", clickHandler);