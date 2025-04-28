import ReactDom from 'react-dom'
import '../styles/modal-overlay.css'
import '../styles/modal-style.css'
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { updateGameDetails } from '../scripts/game_list_services';
import tableContext from './TableContext';

export default function GameModal({gameDetails}) {

    const [inEdit, setInEdit] = useState(false)
    const [details, setDetails] = useState(gameDetails)

    const tableType = useContext(tableContext)
    console.log(tableType)

    const title = useRef(details.title)
    const gameDescription = useRef(details.desc)
    const thoughts = useRef(details.thoughts)

    const saveDetailChanges = () => {

        console.log("called")

        var newGameDetails = {
            title: title.current,
            desc: gameDescription.current,
            thoughts: thoughts.current
        }

        // Have to get the context for which table is used first. UPDATE: WORKING!!
        //updateGameDetails()

        setDetails(newGameDetails)
    }

    const discardTextfieldChanges = () => {

        title.current = details.title
        gameDescription.current = details.desc
        thoughts.current = details.thoughts
    }

    return (        
        <>
            <div className="modal-left-item">
                <figure>
                    <img src={gameDetails.box_art} />
                    <figcaption>Game box art</figcaption>
                </figure>
            </div>

            <div className="modal-right-item">

                {/* TODO: Add a condition here to display a textfield if edit is toggled and headings if not */}
                {(inEdit) ?
                
                        <div className="modal-edit">
                        <label>Title</label>
                        <input className="title-textfield" type="text" defaultValue={title.current} onChange={(e) => {title.current = e.target.value}}/> 

                        <label>Game Description</label>
                        <textarea onChange={(e) => {gameDescription.current = e.target.value}} defaultValue={gameDescription.current}/> 

                        <label>Thoughts</label>
                        <textarea onChange={(e) => {thoughts.current = e.target.value}} defaultValue={thoughts.current}/>
                        
                        <div className="modal-btns">
                            <button className="edit-details" onClick={() => {saveDetailChanges; setInEdit(false)}}>Save Changes</button>
                            <button className="mark-as-played" onClick={() => {discardTextfieldChanges(); setInEdit(!inEdit)}}>Cancel</button>
                        </div>
                    </div>
                    : <>
                        <h2>{title.current}</h2>
                        <p>{gameDescription.current}</p>

                        <h3><i>My thoughts</i></h3>
                        <p>{thoughts.current}</p>

                        <div className="modal-btns">
                            <button className="edit-details" onClick={() => {setInEdit(!inEdit)}}>Edit Details</button>
                            <button className="mark-as-played">Mark As Played</button>
                        </div>
                    </>
                    }                                                                    
            </div>
        </>
    )
}