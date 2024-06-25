import React from "react";
import { useNavigate } from 'react-router-dom';

function CreateFolder() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>CreateFolder</h1>
            <p>todo</p>
        </div>
    );
}

export default CreateFolder;