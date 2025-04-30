import { useContext, useState } from "react"
import PlayedGames from "../components/PlayedGames"
import ToPlayGames from "../components/ToPlayGames"
import About from "../components/About"
import tableContext from "../context/TableContext"
import AddToast from "../components/AddToast"
import Modal from "../components/Modal"
import AddGameModal from "../components/AddGameModal"

export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(false)
    const [page, setPage] = useState(<PlayedGames />)
    const [tableType, setTableType] = useState("playedgames")

    return(
        <tableContext.Provider value={tableType}>
            <header>
                <h1>GamesToPlay</h1>
                
                <ul>
                    <li><button onClick={() => {setPage(<ToPlayGames />); setTableType("toplaygames")}}>To Play</button></li>
                    <li><button onClick={() => {setPage(<PlayedGames />); setTableType("playedgames")}}>Have Played</button></li>
                    <li><button onClick={() => {setPage(<About />); setTableType("about")}}>About</button></li>
                </ul>
            </header>

            <main>
                {page}

                {(tableType != "about") ? 
                    <>
                        <AddToast openModal={() => {setIsOpen(true)}}/>
                        <Modal isOpen={isOpen} onClose={() => {setIsOpen(false)}} component={<AddGameModal/>}/>
                    </> : <></>
                }                
            </main>
        </tableContext.Provider>
    )
}