import gameData from '../lib/games_to_play.json'
import GameGrid from './GameGrid'

export default function ToPlayGames() {

   return (
    <>
        <GameGrid gameList={gameData} />    
    </>
   )
}