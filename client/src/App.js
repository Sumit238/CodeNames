import './App.css';
import React ,{useEffect,useState} from "react"
import io from 'socket.io-client';

import WordBoard from './components/wordboard/WordBoard';
import Teams from './components/Teams/Teams';
import Header from './components/Layout/Header';
import LandingPage from './landingPage/CodeNameLanding';
import { useDispatch ,useSelector } from 'react-redux';
import { setTeams_reducer } from './redux/Slices/TeamsSlice';
import { setPlayers_reducer } from './redux/Slices/PlayersSlice';
const socket = io.connect("http://localhost:5000/");
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    localStorage.setItem('teamId', null);
    socket.on('players_state',(data)=>{
      dispatch(setPlayers_reducer({Players:data}));
      console.log(data,"player_state")
    })
    socket.on('team_state',(data)=>{
      // setTeamsData(data) 
      console.log(data,"teams_state")
      dispatch(setTeams_reducer({teams:data}));
    })
    socket.on("new_player", function(data) {
      // alert(data.id);
      const playerId=data.id;
      localStorage.setItem('playerId', JSON.stringify(playerId));
    })
  }, [])
  
 
  const gameId=useSelector(state=>state.Game.gameId)
  const WholeStore=useSelector(state=>state)
  console.log(WholeStore,"WholeStore")
  console.log(gameId)
  return (
    <div className="App">
        <Header/>
        {!gameId && <LandingPage />}
        
          {gameId && 
            <div className='playGround'>
            <Teams/>
            <WordBoard />
          </div>
          }
      </div>
  );
}

export default App;
