import './App.css';
import React ,{useEffect,useState} from "react"
import WordBoard from './components/wordboard/WordBoard';
import TeamCard from './components/Teams/Teams';
import TeamMembers from './components/Teams/TeamMembers/TeamMembers';
import Header from './components/Layout/Header';
function App() {
  const [backendData,setbackendData]=useState([{}]);
  useEffect(()=>{
    fetch('/api').then( response=>response.json()).then(data=>{
      console.log(data)
      setbackendData(data);
    })
  },[])
  return (
    <div className="App">
        <Header/>
        <div className='playGround'>
          <TeamCard/>
            {!backendData.users && <p>Loading .....</p>}
            {backendData.users &&  <WordBoard words={backendData.users}/>    
            }
        </div>
          
        
    </div>
  );
}

export default App;
