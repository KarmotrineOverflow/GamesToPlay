import ReactDom from 'react-dom'
import modalContext from '../context/ModalContext';
import '../styles/modal-overlay.css'
import '../styles/modal-style.css'

export default function Modal({isOpen, onClose, component}) {

    if (!isOpen) return null;

    return ReactDom.createPortal(        
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-style">                
                    <div className="modal-header">                    
                        <div className="exit-btn" onClick={onClose}><p>X</p></div>
                    </div> 
                    <div className="modal-content-container">

                        <modalContext.Provider value={onClose}>
                            {/* Modal content goes here */}
                            {component}
                        </modalContext.Provider>

                    </div>                               
                </div>
        </div>
    </div>,
        document.getElementById('modal')
    )
}