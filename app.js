var btnTranslate = document.querySelector("#btn");
var textArea = document.querySelector("#text-area")
var output = document.querySelector(".output-container");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

function getTranslatedUrl(text){
    return serverUrl+"?"+"text="+text;
}


btnTranslate.addEventListener("click",function clickEventHandler(){
    // output.innerText = "Translated:"+textArea.value
    // console.log("Clicked");
    // console.log(textArea.value);

    var inputTxt = textArea.value;
    // output.inner

    fetch(getTranslatedUrl(inputTxt)).then(response => response.json()).then(json =>{
        
        translatedText=json.contents.translated
        console.log(translatedText);
        output.textContent = translatedText;
    } );
    

})


