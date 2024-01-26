function encrypt() {
    var inputText = document.getElementById("textInput").value;
    var outputText = document.getElementById("outputText");
    
    if (/[^a-z]/.test(inputText)) {
        document.querySelector(".validation-message").style.display = "block";
        return;
    }

    document.querySelector(".validation-message").style.display = "none";
    outputText.value = cipher(inputText, 1);
}

function decrypt() {
    var inputText = document.getElementById("textInput").value;
    var outputText = document.getElementById("outputText");
    
    if (/[^a-z]/.test(inputText)) {
        document.querySelector(".validation-message").style.display = "block";
        return;
    }

    document.querySelector(".validation-message").style.display = "none";
    outputText.value = cipher(inputText, -1);
}

function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}

function cipher(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
        } else {
            result += text.charAt(i); // Non-alphabetic characters
        }
    }
    return result;
}
