import './App.css';
import React ,{useEffect,useState} from "react"
import io from 'socket.io-client';

import WordBoard from './components/wordboard/WordBoard';
import TeamCard from './components/Teams/Teams';
import TeamMembers from './components/Teams/TeamMembers/TeamMembers';
import Header from './components/Layout/Header';
import LandingPage from './landingPage/CodeNameLanding';
const socket = io.connect("http://localhost:5000/");
function App() {
  return (
    <div className="App">
        <Header/>
        {/* <LandingPage/> */}
        <div className='playGround'>
          <TeamCard/>
          <TeamCard/>
          <WordBoard />
        </div>
          
        
    </div>
  );
}

export default App;
