// let gui = document.getElementById('gui');

// document.onmousemove = (event) => {
//     let x = event.clientX + -10
//     let y = event.clientY + -15 

//     let newElement = document.createElement("i");
//     let rdmLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     newElement.style.color = randomColor;

//     // newElement.style.boxShadow = `0 0 10px 3px ${randomColor}`;

//     newElement.innerText = rdmLetter

//     document.body.appendChild(newElement);

//     document.body.style.position = "relative";

//     newElement.style.position = "absolute";
//     newElement.style.left = x + "px"  
//     newElement.style.top = y  + "px"
// }

let intervalCode;
let mouseClientX; 
let mouseClientY;

document.addEventListener("mousedown", (event) => {

    mouseClientX = event.clientX;
    mouseClientY = event.clientY;

    intervalCode = setInterval (() => {
    let x = mouseClientX - 10
    let y = mouseClientY - 15 

    let newElement = document.createElement("i");
    let rdmLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // newElement.style.color = randomColor;

    // newElement.style.boxShadow = `0 0 10px 3px ${randomColor}`;

    newElement.innerText = rdmLetter

    document.body.appendChild(newElement);

    document.body.style.position = "relative";

    newElement.style.position = "absolute";
    newElement.style.left = x + "px"  
    newElement.style.top = y  + "px"
    })
})

document.addEventListener("mousemove", (event) => {
    mouseClientX = event.clientX;
    mouseClientY = event.clientY;
});

document.addEventListener("mouseup", (event) => {
    clearInterval(intervalCode);
})
