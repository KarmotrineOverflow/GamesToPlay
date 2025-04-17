import ReactDom from 'react-dom'
import '../styles/modal-overlay.css'
import '../styles/modal-style.css'

export default function GameModal({isOpen, onClose, gameDetails}) {

    if (!isOpen) return null;

    return ReactDom.createPortal(
        <div className="modal-overlay">
            <div className="modal-style">
                <div className="exit-btn" onClick={onClose}><p>X</p></div>
                <div className="modal-header">                    
                </div> 
                <div className="modal-content-container">

                    <div className="modal-left-item">
                        <figure>
                            <img src={gameDetails.box_art} />
                            <figcaption>Game box art</figcaption>
                        </figure>
                    </div>

                    <div className="modal-right-item">
                        <h2>{gameDetails.title}</h2>
                        <p>{gameDetails.desc}</p>

                        <h3><i>My thoughts</i></h3>
                        <p>{gameDetails.thoughts}</p>
                    </div>

                </div>                               
            </div>
        </div>,
        document.getElementById('modal')
    )
}