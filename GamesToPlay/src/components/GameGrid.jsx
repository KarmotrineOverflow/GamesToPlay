import '../styles/game-entry.css'
import '../styles/game-grid.css'
import { useEffect, useState } from "react";
import Modal from './Modal';
import { fetchGameBoxArt } from '../scripts/image_services';
import { getGameList, updateGameDetails } from '../scripts/game_list_services';
import GameModal from './GameModal';

export default function GameGrid(props) {

    var [isOpen, setIsOpen] = useState(false);
    var [gameList, setGameList] = useState([]);
    var [gameModal, setGameModal] = useState("");
    var [gameDetails, setGameDetails] = useState({})
    var gameListType = props.gameListType
    var gameData = [];

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

        gameData = (await getGameList(gameListType))["games"]
        await displayGameList()
     }, []
    )

    const displayGameList = async function () {

        for (var i = 0; i < gameData.length; i++) {

            if (!gameData[i]["box_art"]) {

                var boxArtURL = await fetchGameBoxArt(gameData[i]["title"]);
                gameData[i]["box_art"] = boxArtURL.image_url;

                // Update the box art URLs in the database for caching
                updateGameDetails(gameListType, gameData[i])
            }          
        }

        setGameList(gameData.map(game => <li key={game.id} onClick={() => viewGameDetails(game.id - 1)}>
        <div className="game-entry">
            <div className="game-box-art"><img src={game.box_art} /></div>
            <div className="game-title">{game.title}</div>
        </div>
        </li>))
    }

    const viewGameDetails = (gameId) => {

        var gameTitle = gameData[gameId].title;
        var gameBoxArt = gameData[gameId].box_art;
        var gameDescription = gameData[gameId].game_description;
        var thoughts = gameData[gameId].thoughts;

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

            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} component={<GameModal gameDetails={gameDetails}/>} />

        {/* 
            
                - Fetch the list of games from a database (Use the json file to test for now)    
                - Map the fetched list
                - Display the mapped list in a grid div

            */}
        </>
    )
}