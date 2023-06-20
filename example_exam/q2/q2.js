function activate() {
    var textToClean = document.getElementById('textToClean').value;
    var charToRemove = document.getElementById('charToRemove').value;
    var cleanedText = "";
    for (var i = 0; i < textToClean.length; i++){
        var currentChar = textToClean[i];
        if (currentChar != charToRemove){
            cleanedText += currentChar;
        }
    }
    document.getElementById('injectCleanedTextTo').value = cleanedText;
}

function clean() {
    document.getElementById('textToClean').value = "";
    document.getElementById('charToRemove').value = "";
    document.getElementById('injectCleanedTextTo').value = "";
}