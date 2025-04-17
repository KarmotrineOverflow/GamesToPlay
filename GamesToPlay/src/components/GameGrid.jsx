import '../styles/game-entry.css'
import '../styles/game-grid.css'
import { useEffect, useState } from "react";
import GameModal from './GameModal';
import { fetchGameBoxArt } from '../scripts/image_services';
import { getGameList, updateGameDetails } from '../scripts/game_list_services';

export default function GameGrid(props) {

    var [isOpen, setIsOpen] = useState(false);
    var [gameList, setGameList] = useState([]);
    var [gameModal, setGameModal] = useState("");
    var [gameDetails, setGameDetails] = useState({})
    var gameListType = props.gameListType
    var gameData; 

    /* useEffect(() => async function () {
        setGameList(await gameData["games"].map(game => <li key={game.id} onClick={() => viewGameDetails(game.id)}>
        <div className="game-entry">
            <div className="game-box-art"><img width="300px" height="300px" src={fetchGameBoxArt(game.title)} /></div>
            <div className="game-title">{game.title}</div>
        </div>
        </li>)) }, 
        []
    ) */

    useEffect(() => async () => {  

        await fetchGameList()
        //await displayGameList()
     },
        []
    )

    const fetchGameList = async function () {

        gameData = await getGameList(gameListType)
        console.log("TEST")
    }

    const displayGameList = async function () {

        for (var i = 0; i < gameData["games"].length; i++) {

            if (!gameData["games"][i]["box_art"]) {

                var boxArtURL = await fetchGameBoxArt(gameData["games"][i]["title"]);
                gameData["games"][i]["box_art"] = boxArtURL.image_url;

                // Update the box art URLs in the database for caching
                updateGameDetails(gameListType, gameData["games"][i])
            }          
        }

        setGameList(gameData["games"].map(game => <li key={game.id} onClick={() => viewGameDetails(game.id)}>
        <div className="game-entry">
            <div className="game-box-art"><img src={game.box_art} /></div>
            <div className="game-title">{game.title}</div>
        </div>
        </li>))
    }

    const viewGameDetails = (gameId) => {

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
                {gameList.length == 0 ? <h1>Loading</h1> : gameList}
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