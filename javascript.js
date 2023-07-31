const parentDiv = document.querySelector('#sketchDiv');

function createGrid(gridSize){

    let width = 100 / gridSize;
    let height= 100 / gridSize;

    for(let i = 0; i < gridSize * gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.cssText= "width: " + width.toString() + "%;" + "Height: " + height.toString() + "%;";
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "red";
        })
        parentDiv.appendChild(div);

    }


}
function clearGrid(){
    let childElem = parentDiv.children;
    for(let i = 0; i < childElem.length; i++){
        childElem[i].style.backgroundColor = "transparent";
    }
}
function removeGrid(){
    while (parentDiv.firstChild){
        parentDiv.removeChild(parentDiv.firstChild);
    }
}
const btnClear = document.querySelector('#clear');
const btnGrid = document.querySelector('#Gridsize');

btnClear.addEventListener('click', () => {
    clearGrid();
})

btnGrid.addEventListener('click',() => {
    removeGrid();
    let gridSize = parseInt(prompt("Enter Grid Size"));
    if(gridSize >= 100){gridSize = 100};
    createGrid(gridSize);
})
