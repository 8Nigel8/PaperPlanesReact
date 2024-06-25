import React from "react";
import { useNavigate } from 'react-router-dom';

function Lexeme() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Lexeme</h1>
            <p>todo</p>
        </div>
    );
}

export default Lexeme;