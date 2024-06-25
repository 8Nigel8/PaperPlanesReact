import React from "react";
import { useNavigate } from 'react-router-dom';

function CreateLexeme() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>CreateLexeme</h1>
            <p>todo</p>
        </div>
    );
}

export default CreateLexeme;