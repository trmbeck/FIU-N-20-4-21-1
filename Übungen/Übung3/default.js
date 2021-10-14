function btn_click(){
    let divContainer = document.getElementById('anzeige');
    let name = document.getElementById('name').value;
    let telefon = document.getElementById('telefon').value;
    let email = document.getElementById('email').value;
    let adresse = document.getElementById('adresse').value;
    let gebdat = document.getElementById('gebdat').value;
    let br = '<br>'
    let anzeige = name + '<br>' + telefon + br + email + br + adresse + br + gebdat;
    divContainer.innerHTML = anzeige;
    console.log(anzeige);
    console.log("Mail is valid: " + CheckMail(email));
    
}

function CheckMail(mailAddress){
    for(let i = 0; i < mailAddress.length;i++){
        if (mailAddress[i] == "@") return true;
    }
    return false;
}