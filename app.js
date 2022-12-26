const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    h1.innerText = `rgb(${num1}, ${num2}, ${num3})`;
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
});



















