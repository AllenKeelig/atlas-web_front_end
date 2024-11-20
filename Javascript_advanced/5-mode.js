function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}
function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Atlas!";
    document.body.appendChild(paragraph);
    const spookyBtn = document.createElement("button");
    spookyBtn.textContent = "Spooky";
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Dark Mode";
    const screamBtn = document.createElement("button");
    screamBtn.textContent = ("Scream mode");
}
main();