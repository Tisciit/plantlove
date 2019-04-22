import React, { useState } from 'react';
import Plant from './plant'

const Plants = () => {

    const [plants, setPlants] = useState([])

    const addPlant = () => {
        const _plants = [...plants];
        _plants.push(
            {
                name: "hallo",
                description: "test"
            }
        );

        setPlants(_plants);
    }

    return (
        <div>
            {plants.map((p, index) => {
                return <Plant key={index} name={p.name} description={p.description} />
            })}

            <button onClick={addPlant}></button>
        </div>
    )
}

export default Plants;