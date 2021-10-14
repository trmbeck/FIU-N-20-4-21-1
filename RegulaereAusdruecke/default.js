let eingabe = "Fiat Punto";
let regex = /[123456]/                  // Ziffern 1 bis 6
regex = /[1-9][a-dA-D]/                 // 1. Ziffer 1-9 zweiete Ziffer a-d
regex = /[1-9][0-9]?[0-9]?[a-zA-Z]?/    //Hausnr. 1-stellig bis 3-stellig mit Buchstabe
regex = /[1-9][0-9]{0,4}[a-zA-Z]?/      // {min,max} Wiederholung
regex = /^[1-9][0-9]{0,4}[a-zA-Z]?/     // ^ Anfang
regex = /[1-9][0-9]{0,4}[a-zA-Z]?$/     // $ Ende
regex = /[1-9]*/                        // * beliebiege Wiederholung
regex = /[@]+/                          // + beliebiege Wiederholung aber min. 1 mal

regex = /Michael .*Beck/                // . ist ein beliebiges Zeichen
regex = /Michael (Alexander )?Beck/     // () Zusammenfassen

regex = /Das Wetter ist (toll|richtig schlecht)/i    // | Alternative, i case insensitiv

regex = /(VW (Golf|Polo))|(Fiat (Punto|Panda))/

let gueltig = eingabe.match(regex)

console.log(gueltig);
document.write("matched: " + gueltig);