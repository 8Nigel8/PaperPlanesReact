import React from "react";
import { useNavigate } from 'react-router-dom';

function Collection() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/');
    }
    return (
        <div>
            <h1>Collection</h1>
            <p>todo</p>
            <button onClick={handleFolders}>Collection</button>
        </div>
    );
}

export default Collection;