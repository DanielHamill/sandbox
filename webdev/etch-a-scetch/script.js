const container = document.querySelector(".container");
const slider = document.querySelector("#size");
const download = document.querySelector("#download");

let isMouseDown = false;

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

resize_board(slider.value, slider.value);

slider.oninput = (e) => {
    const gridSize = e.target.value;
    resize_board(gridSize, gridSize);
    const currentSize = document.querySelector("#currentSize");
    currentSize.textContent = gridSize
}

download.onclick = (e) => {
    html2canvas(container).then(download_canvas);
}

function download_canvas(canvas) {
  const canvasUrl = canvas.toDataURL();
  const temp_anchor = document.createElement('a');
  temp_anchor.href = canvasUrl;
  temp_anchor.download = "my-canvas-image";
  temp_anchor.click();
  temp_anchor.remove();
}


function resize_board(rows, cols) {
    container.innerHTML = ''
    for (let i=0; i<rows; i++) {
        const row_element = document.createElement("div");
        row_element.classList.add("row");
        row_element.style.height = `${1/rows*100}%`;

        for (let j=0; j<cols; j++) {
            const col_element = document.createElement("div");
            col_element.classList.add("col");
            col_element.style.width = `${1/cols*100}%`;
            col_element.onmousedown = () => {
                col_element.style.backgroundColor = "black"
                col_element.style.outline = "1px solid black"
            }
            col_element.onmouseenter = () => {
                if(isMouseDown) {
                    col_element.style.backgroundColor = "black"
                    col_element.style.outline = "1px solid black"
                }
            }
            row_element.appendChild(col_element);
        }
        container.appendChild(row_element);
    }
}