const windows = Array.from(document.querySelectorAll(".window, .window2"));
const textam = document.getElementById("OpenTextam");

let isDragging = false;
let currentElement = null;
let offsetX, offsetY;

function onMouseDown(e) {
    if (windows.includes(e.target.closest('.window, .window2'))) {
        isDragging = true;
        currentElement = e.target.closest('.window, .window2');
        offsetX = e.clientX - currentElement.getBoundingClientRect().left;
        offsetY = e.clientY - currentElement.getBoundingClientRect().top;
    }
}

function onMouseMove(e) {
    if (isDragging && currentElement) {
        currentElement.style.left = `${e.clientX - offsetX}px`;
        currentElement.style.top = `${e.clientY - offsetY}px`;
    }
}

function onMouseUp() {
    isDragging = false;
    currentElement = null;
}

windows.forEach(win => {
    win.addEventListener("mousedown", onMouseDown);
});

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

textam.addEventListener('click', () => {
    const textam2 = document.getElementById("textam2");
    textam2.style.display = 'block';
});
