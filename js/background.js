const images = ["pic1.webp","pic2.webp","pic3.webp"];

const chosenImage = images [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

console.log(bgImage);

document.body.appendChild(bgImage);