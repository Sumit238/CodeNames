import { react } from 'react';
import CreateJoinGame from './CreateJoinGame';
const LandingPage=()=>{

    return (
        <>
            <div className="bg-light p-5 rounded-lg m-3">
                <h1 className="display-4">Code Names!</h1>
                <p className="lead">This is a strategic word game played in teams, where players give clues to help their teammates guess the correct words while avoiding those belonging to the other team.</p>
                <hr className="my-4" />
                <p>
                    Unleash your inner detective with codenames
                </p>
            </div>
            <CreateJoinGame/>
        </>
        
    )
}


export default LandingPage;