import './App.css';
import React ,{useEffect,useState} from "react"
import io from 'socket.io-client';

import WordBoard from './components/wordboard/WordBoard';
import TeamCard from './components/Teams/Teams';
import TeamMembers from './components/Teams/TeamMembers/TeamMembers';
import Header from './components/Layout/Header';
import LandingPage from './landingPage/CodeNameLanding';
import { useDispatch ,useSelector } from 'react-redux';
const socket = io.connect("http://localhost:5000/");
socket.on('players_state',(data)=>{
  console.log(data,"player_state")
})
socket.on('team_state',(data)=>{
  console.log(data,'team_state')
})
function App() {

  socket.on("new_player", function(data) {
    // alert(data.id);
    const playerId=data.id;
    localStorage.setItem('playerId', JSON.stringify(playerId));
  })
  const gameId=useSelector(state=>state.Game.gameId)
  console.log(gameId)
  return (
    <div className="App">
        <Header/>
        {!gameId && <LandingPage />}
        
          {gameId && 
            <div className='playGround'>
            <TeamCard />
            <TeamCard />
            <WordBoard />
          </div>
          }
      </div>
  );
}

export default App;
