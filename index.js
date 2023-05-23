var password = document.getElementById("pswrd");
function gerneratePSWRD(){  
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for(let i= 0; i < 8; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("pswrd").value = password;
}

function copyPSWRD() {
    var copyText = document.getElementById("pswrd");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}
