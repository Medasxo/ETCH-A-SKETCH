function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function createGrid(){
    if(document.querySelector("#container") !== null){
        const currentGrid = document.querySelector("#container");
        document.body.removeChild(currentGrid);
    }
    let gridSize = document.getElementById("gridSize").value;
    const container = document.createElement("table");
    container.id = "container";
    document.body.appendChild(container);
    for(let i = 0; i < gridSize; i++){
        let gridRow = document.createElement("tr");
        gridRow.id = "row" + i;
        container.appendChild(gridRow);
        let rowW = document.getElementById("row" + i);
        for(let j = 0; j < gridSize; j++){
            let gridCell = document.createElement("td");
            rowW.appendChild(gridCell);
            gridCell.className = "cell";
            gridCell.addEventListener("mouseover", ()=>{
                const rgbButton = document.querySelector("#rgb");
                if(rgbButton.checked){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    gridCell.style.backgroundColor = "#" + randomColor;
                }
                else{
                    gridCell.style.backgroundColor = "black";
                }
                
            });
        }

        
    }
}
createGrid();

