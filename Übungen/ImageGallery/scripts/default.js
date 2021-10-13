let divElement = document.getElementById("divID");
let thumbnails = divElement.getElementsByTagName("img");
//let thumbnails = document.getElementsByName("Thumbnail");
console.log(thumbnails);

for (let index = 0; index < thumbnails.length; index++) {
    const thumbnail = thumbnails[index];
    thumbnail.addEventListener('mouseover',eventMouseOver,false);
    thumbnail.addEventListener('mouseout',eventMouseOut,false);
}

function eventMouseOver(){
    this.style.cursor = 'hand';
    this.style.borderColor = 'red';
}

function eventMouseOut(){
    this.style.cursor = 'pointer';
    this.style.borderColor = 'grey';
}



function changeImageOnClick1(thisObject){
    let mainimage = document.getElementById('mainimage');
    mainimage.src = thisObject.src;
}

function changeImageOnClick2(evt){
    let mainimage = document.getElementById('mainimage');
    mainimage.src = evt.target.getAttribute("src");
    //console.log(evt);
}

// function changeImageOnClick3(evt){
//     let mainimage = document.getElementById('mainimage');
//     mainimage.src = "Images/Image3.png";
// }

// function changeImageOnClick4(evt){
//     let mainimage = document.getElementById('mainimage');
//     mainimage.src = "Images/Image4.png";
// }

// function changeImageOnClick5(evt){
//     let mainimage = document.getElementById('mainimage');
//     mainimage.src = "Images/Image5.png";
// }

