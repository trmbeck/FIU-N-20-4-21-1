let mailElement = document.getElementById("txbEmail");
mailElement.addEventListener('blur',mailBlurEventHandler,false); //false = bubbling, true = capturing
mailElement.addEventListener('blur',mailBlur,false);


function changeColorOnMouseOut(){
    let control = document.getElementById("txbName");
    control.style.background = 'red';
    control.style.color = "white";

    control = document.getElementById("btn");
    control.style.background = 'black';
    control.style.color = "white";
}

function senden(){
    //Zugriff auf DOM-Elemente
    let txbname = document.getElementById("txbName");
    let txbemail = document.getElementById("txbEmail");
    txbname.value = "Bitte Name eingeben";
    txbemail.value = "Bitte E-Mail eingeben";
    let name = document.getElementsByName("Name");
    console.log(name[0]);
    for (let index = 0; index < name.length; index++) {
        const element = name[index];
        console.log(element.id);
    }
    let tdListe = document.getElementsByTagName("td");
    console.log(tdListe);
    for (let index = 0; index < tdListe.length; index++) {
        const element = tdListe[index];
        console.log(element.innerHTML);
    }
}

function mailBlur(){
    console.log("Blur");
    mailElement.removeEventListener('blur',mailBlur,false);
}

function mailBlurEventHandler(){
    console.log("BlurEventHandler");
}