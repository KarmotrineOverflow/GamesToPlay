import '../styles/add-toast.css';

export default function AddToast({ openModal }) {

    


    return (

        <button className="add-toast" onClick={openModal}>
            <p>+</p>
        </button>
    );
}