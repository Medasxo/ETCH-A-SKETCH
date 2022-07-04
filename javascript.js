
function createGrid(){
    if(document.querySelector("#container") != null){
        const currentGrid = document.querySelector("#container");
        document.body.removeChild(currentGrid);
    }
    let gridSize = document.getElementById("gridSize").value;
    console.log(gridSize);
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
                gridCell.setAttribute('style','background-color:black');
            });
        }

        
    }
}
createGrid();

