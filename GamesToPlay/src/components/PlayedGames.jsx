import gameData from '../lib/played_games.json'
import GameGrid from './GameGrid'

export default function PlayedGames() {

   return (
    <>
        <GameGrid gameList={gameData} gameListType={"playedgames"}/>    
    </>
   )
}