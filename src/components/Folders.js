import React from "react";
import { useNavigate } from 'react-router-dom';

function Floders() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Floders</h1>
            <p>todo</p>
        </div>
    );
}

export default Floders;