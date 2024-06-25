import React from "react";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const handleFolders = (e)=>{
        navigate('/folders');
    }
    return (
        <div>
            <h1>Головна</h1>
            <p>Згодом</p>
            <button onClick={handleFolders}>Folders</button>
        </div>
    );
}

export default Dashboard;