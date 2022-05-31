import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";


const App = () => {
    //create state
    const [board, setBoard] = useState(new Board())


    //init restart by default
    useEffect(() => {
        restart()

    }, [])

    // restart game
    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }


    return (
        <div className="app">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
};

export default App;
