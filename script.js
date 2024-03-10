let gui = document.getElementById('gui');

document.onmousemove = (event) => {
    let x = event.clientX
    let y = event.clientY + -10 

    let newElement = document.createElement("i");
    let rdmLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    newElement.style.color = randomColor;

    // newElement.style.boxShadow = `0 0 20px 1px ${randomColor}`;

    newElement.innerText = rdmLetter

    document.body.appendChild(newElement);

    document.body.style.position = "relative";

    newElement.style.position = "absolute";
    newElement.style.left = x + "px"  
    newElement.style.top = y  + "px"
}
