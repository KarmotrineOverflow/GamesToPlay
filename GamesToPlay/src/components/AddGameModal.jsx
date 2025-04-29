import { addGame } from "../scripts/game_list_services"
import { useContext } from "react";
import tableContext from "../context/TableContext"
import { useRef } from "react";

export default function AddGameModal() {

    const tableType = useContext(tableContext)

    const title = useRef("");
    const gameDescription = useRef("");
    const thoughts = useRef("");    

    const saveGame = async () => {

        var gameDetails = {
            title: title.current,
            game_description: gameDescription.current,
            thoughts: thoughts.current,
            box_art: null
        }

        await addGame(tableType, gameDetails)
    }   

    return (

        <div className="add-game-modal">
            <h2>Add Game</h2>
            <form className="modal-right-item">

                <label>Title</label>
                <input type="text" placeholder="Enter video game name.." onChange={(e) => {title.current = e.target.value}}/>

                <label>Game Description</label>
                <input type="text" placeholder="Enter video game description.." onChange={(e) => {gameDescription.current = e.target.value}}/>

                <label>Thoughts</label>
                <input type="text" placeholder="Enter your thoughts.." onChange={(e) => {thoughts.current = e.target.value}}/>

                <div className="modal-btns">
                    <button className="edit-details" onClick={() => { saveGame() }}>Add Game</button>
                    <button className="delete-entry">Delete Entry</button>
                </div>

            </form>
        </div>
    )
}