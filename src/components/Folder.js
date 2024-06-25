import React from "react";
import { useNavigate } from 'react-router-dom';

function Folder() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Folder</h1>
            <p>todo</p>
            <button onClick={handleFolders}>Folders</button>
        </div>
    );
}

export default Folder;