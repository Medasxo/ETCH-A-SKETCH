
function createGrid(){
    let container = document.getElementById("container");
    for(let i = 0; i < 100; i++){
        let gridRow = document.createElement("tr");
        gridRow.id = "row" + i;
        container.appendChild(gridRow);
        let rowW = document.getElementById("row" + i);
        for(let j = 0; j < 100; j++){
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
/** 
gridCell.addEventListener("mouseover", mouseOver, false);
        function mouseOver(){
            gridCell.setAttribute('style','background-color:black');
        }
*/
