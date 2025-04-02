import '../styles/game-entry.css'
import gameData from '../lib/games_to_play.json'

export default function PlayedGames() {

    var gameList = gameData["games"].map(game => <li key={game.id}>
        <div className="game-entry">
            <div className="game-box-art">{game.box_art}</div>
            <div className="game-title">{game.title}</div>
        </div>
    </li>)

    return (
        <>
            <ul>
                
            </ul>

        {/* 
            
                - Fetch the list of games from a database (Use the json file to test for now)    
                - Map the fetched list
                - Display the mapped list in a grid div

            */}
        </>
    )
}