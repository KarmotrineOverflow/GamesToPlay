import ReactDom from 'react-dom'
import '../styles/modal-overlay.css'
import '../styles/modal-style.css'
import { useState } from 'react';
import { useRef } from 'react';
import { updateGameDetails } from '../scripts/game_list_services';

export default function GameModal({isOpen, onClose, gameDetails}) {

    if (!isOpen) return null;

    const [inEdit, setInEdit] = useState(false)
    const [details, setDetails] = useState(gameDetails)

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

        // Have to get the context for which table is used first
        //updateGameDetails()

        setDetails(newGameDetails)
    }

    const discardTextfieldChanges = () => {

        title.current = details.title
        gameDescription.current = details.desc
        thoughts.current = details.thoughts
    }

    return ReactDom.createPortal(        
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-style">                
                    <div className="modal-header">                    
                        <div className="exit-btn" onClick={onClose}><p>X</p></div>
                    </div> 
                    <div className="modal-content-container">

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

                    </div>                               
                </div>
        </div>
    </div>,
        document.getElementById('modal')
    )
}