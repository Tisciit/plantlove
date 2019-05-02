import React, { useState } from 'react';
import Plant from './plant'

const Plants = () => {

    const [plants, setPlants] = useState(localStorage.getItem('plants') ? JSON.parse(localStorage.getItem('plants')) : [{
        name: "my first plant",
        description: "u gay",
    }])

    const addPlant = (name = "no name", description = "no desc") => {
        const _plants = [...plants];
        _plants.push({
            name: name,
            description: description,
        });
        setPlants(_plants);
    }

    const showAddPlant = () => {
        addPlant("","");
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('plants', JSON.stringify(plants));
    }

    return (
        <div>
            {plants.map((p, index) => {
                return <Plant key={index} name={p.name} description={p.description} />
            })}
            <div className="button-row">
                <button className="button-round-add" onClick={showAddPlant}>Add</button>
                <button className="button-round-save" onClick = {saveToLocalStorage}>Save</button>
            </div>
        </div>
    )
}

export default Plants;