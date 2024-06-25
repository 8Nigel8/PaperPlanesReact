import React from "react";
import { useNavigate } from 'react-router-dom';

function CreatePaper() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>CreatePaper</h1>
            <p>todo</p>
        </div>
    );
}

export default CreatePaper;