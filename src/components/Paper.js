import React from "react";
import { useNavigate } from 'react-router-dom';

function Paper() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Paper</h1>
            <p>todo</p>
        </div>
    );
}

export default Paper;