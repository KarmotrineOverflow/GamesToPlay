import { useState } from "react"
import PlayedGames from "../components/PlayedGames"
import ToPlayGames from "../components/ToPlayGames"
import About from "../components/About"

export default function Dashboard() {

    const [page, setPage] = useState(<PlayedGames />)

    return(
        <>
            <header>
                <h1>Games To Play</h1>

                <ul>
                    <li><button onClick={() => {setPage(<ToPlayGames />)}}>To Play</button></li>
                    <li><button onClick={() => {setPage(<PlayedGames />)}}>Have Played</button></li>
                    <li><button onClick={() => {setPage(<About />)}}>About</button></li>
                </ul>
            </header>

            <main>
                {page}
            </main>
        </>
    )
}