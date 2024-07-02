import React from "react";
import { useNavigate } from 'react-router-dom';

function CreateCollection() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>CreateCollection</h1>
            <p>todo</p>
        </div>
    );
}

export default CreateCollection;