import '../styles/game-entry.css'
import '../styles/game-grid.css'
import { useState } from "react";
import GameModal from './GameModal';

export default function GameGrid(props) {

    var [isOpen, setIsOpen] = useState(false);
    var [gameModal, setGameModal] = useState("");
    var [gameDetails, setGameDetails] = useState({})
    var gameData = props.gameList

    var gameList = gameData["games"].map(game => <li key={game.id} onClick={() => viewGameDetails(game.id)}>
        <div className="game-entry">
            <div className="game-box-art">{game.box_art}</div>
            <div className="game-title">{game.title}</div>
        </div>
    </li>)

    var viewGameDetails = (gameId) => {

        var gameTitle = gameData["games"][gameId].title;
        var gameBoxArt = gameData["games"][gameId].box_art;
        var gameDescription = gameData["games"][gameId].game_description;
        var thoughts = gameData["games"][gameId].thoughts;

        setGameDetails({
            "title": gameTitle,
            "desc": gameDescription,
            "thoughts": thoughts,
            "box_art": gameBoxArt
        });

        setIsOpen(true);
    }

    return (
        <>
            <ul className="game-grid">
                {gameList}
            </ul>

            <GameModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} gameDetails={gameDetails} />

        {/* 
            
                - Fetch the list of games from a database (Use the json file to test for now)    
                - Map the fetched list
                - Display the mapped list in a grid div

            */}
        </>
    )
}