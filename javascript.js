function createGrid(){
    let container = document.querySelector("#container");
    for(let i = 0; i < 16; i++){
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        for(let x = 0; x < 16; x++){
            let gridCell = document.createElement("div");
            gridCell.className = "cell";
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}
createGrid();
