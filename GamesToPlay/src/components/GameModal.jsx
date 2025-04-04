import ReactDom from 'react-dom'
import '../styles/modal-overlay.css'
import '../styles/modal-style.css'

export default function GameModal({isOpen, onClose, gameDetails}) {

    if (!isOpen) return null;

    return ReactDom.createPortal(
        <div className="modal-overlay">
            <div className="modal-style">
                <div className="exit-btn" onClick={onClose}>X</div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}