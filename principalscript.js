const windows = Array.from(document.querySelectorAll(".window, .window2, .window3"));
const textam = document.getElementById("OpenTextam");

let isDragging = false;
let currentElement = null;
let offsetX, offsetY;

function onMouseDown(e) {
    if (windows.includes(e.target.closest('.window, .window2, .window3'))) {
        isDragging = true;
        currentElement = e.target.closest('.window, .window2, .window3');
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


function createPC() {
      // Obtém os valores dos campos
      var pcName = document.getElementById('PCname').value;
      var os = document.getElementById('OS').value;
      var pcType = document.getElementById('PCtype').value;

      // Cria uma nova div para o PC
      var newPC = document.createElement('div');
      newPC.innerHTML = '<p>PC Name: ' + pcName + '</p>' +
                        '<p>Operating System: ' + os + '</p>' +
                        '<p>PC Type: ' + pcType + '</p>';

      // Adiciona a nova div dentro da div com id "Computers"
      document.getElementById('Computers').appendChild(newPC);
}

const internet = document.getElementById("internetcon");
const internetwin = document.getElementById("internetwin");

internet.addEventListener('click', () => {
    internetwin.style.display = 'block';
});
