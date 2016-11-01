 "use strict"; 

(function () {
    
    /*
        the function to start game on window load
    */
    window.onload = function () {
        startGame();  
    };
    
     document.getElementById("reset").addEventListener("click", function(){ 
        startGame();
    });
    
    var grid = [],
        EMPTY = "\xA0",
        currentTurn = "X",
        moves = 0;
        
    
    /*
        Function to create the tic tac toe game board
    */
    function createBoard(){
        
        var myTableDiv = document.getElementById("gameBoard"); 
        var table = document.createElement("table");
        table.border = '1';
        
        for (var i = 0; i < 3; i += 1) {
            
            var row = document.createElement("tr");
            table.appendChild(row);
            
            for (var j = 0; j < 3; j += 1) {
                
                var cell = document.createElement("td");
                cell.onclick = setBoard;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                grid.push(cell);
            }
        }   
        table.setAttribute("class","cell");
        myTableDiv.appendChild(table);
    }
    
    createBoard();

    /*
        Function to play the game and check validations
    */
    function setBoard(){
        
        if(this.firstChild.nodeValue !== EMPTY){            
            setMessage("Wrong Move! Square already filled!");
            this.style.cursor="not-allowed";
            return;
        }      
        this.style.cursor="default";
        this.firstChild.nodeValue = currentTurn;   
        moves += 1;
        
        if(moves === 9){          
            if(confirm("GAME OVER! START A NEW ONE?") === true){
                startGame();
            }   
            else{                
                setMessage("GAME OVER!");
            }
        } else {        
            currentTurn = currentTurn === "X" ? "O" : "X";
            setMessage(currentTurn + "'s turn");
        }      
    }              
    
    /*
        Function to start the game 
    */

    function startGame(){
    
        /*var score = {
            "X": 0, 
            "O": 0
        };*/
        moves = 0;
        document.currentTurn = "X";
        setMessage(document.currentTurn + " will start the game");
        var totalCells = grid.length;    
        for(var i=0; i < totalCells; i++){        
            grid[i].firstChild.nodeValue = EMPTY;
        }
    }
    
    function setMessage(state){
    
        var displayMessage = document.getElementById("message");
        displayMessage.innerHTML= state;
    }
    
}());