let gameGrid = document.getElementById("gameGrid");

console.log(gameGrid);

for (let i = 0; i < 16; i++) { 
    let square = document.createElement("button"); 
    square.classList.add("square"); 
    square.addEventListener("click", function() { 
        console.log("Square clicked"); 
    }); 
    gameGrid.appendChild(square);
} 