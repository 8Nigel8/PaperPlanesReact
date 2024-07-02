import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Collections() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/collection/get_all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.data);
                setData(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div>
            <h1>Collections</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.name}</li> // Adjust field 'name' based on your data structure
                    ))}
                </ul>
            ) : (
                <p>No collections available.</p>
            )}
        </div>
    );
}

export default Collections;
