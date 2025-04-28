import { useState } from "react"
import PlayedGames from "../components/PlayedGames"
import ToPlayGames from "../components/ToPlayGames"
import About from "../components/About"
import tableContext from "../components/TableContext"

export default function Dashboard() {

    const [page, setPage] = useState(<PlayedGames />)
    const [tableType, setTableType] = useState("playedgames")

    return(
        <tableContext.Provider value={tableType}>
            <header>
                <h1>Games To Play</h1>
                
                <ul>
                    <li><button onClick={() => {setPage(<ToPlayGames />); setTableType("toplaygames")}}>To Play</button></li>
                    <li><button onClick={() => {setPage(<PlayedGames />); setTableType("playedgames")}}>Have Played</button></li>
                    <li><button onClick={() => {setPage(<About />)}}>About</button></li>
                </ul>
            </header>

            <main>
                {page}
            </main>
        </tableContext.Provider>
    )
}