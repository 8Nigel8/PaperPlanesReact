import React from "react";
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Game</h1>
            <p>todo</p>
        </div>
    );
}

export default Game;