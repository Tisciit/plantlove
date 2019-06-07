import React, { useState } from 'react';
import Style from './AddPlant.module.css'

const AddPlant = () => {


    const [waterInterval, setWaterInterval] = useState(0);

    const getClassName = () => {
        return "addplant " + Style.grid;
    }

    const botanicals = {
        A: {
            c1: 1,
            c2: 2,
            c3: 3,
        },
        B: {
            c1: 4,
            c2: 5,
            c3: 6
        },
    }

    const updateVals = (e) => {

        const botanica = botanicals[e.target.value];

        if (botanica) {
            setWaterInterval(botanica.c1);
        }
    }

    const updateWaterInterval = (e) => {
        setWaterInterval(e.target.value);
    }

    const doTheLog = () => {
        console.log(waterInterval);
    }

    return (
        <div className={getClassName()}>
            <label htmlFor="botanicalName">Botanical Name</label>
            <input id="botanicalName" list="botanicalNames" onChange={updateVals}></input>
            <datalist id="botanicalNames">
                <option>A</option>
                <option>B</option>
            </datalist>

            <label>DisplayName</label>
            <input></input>

            <label>Photo</label>
            <input type="file" name="image" accept="image/*"></input>

            <label>Last Date of water</label>
            <input type="date"></input>
            <label>Water interval</label>
            <input type="number" value={waterInterval} onInput={updateWaterInterval}></input>

            <label>Last Date of de-dust</label>
            <input type="date"></input>
            <label>De-dust interval</label>
            <input type="number"></input>

            <label>Last Date of fertilization</label>
            <input type="date"></input>
            <label>Fertilization interval</label>
            <input type="number"></input>

            <label>Send notifications</label>
            <input className={Style.fancyYN} type="checkbox"></input>

            <label className={Style.fullrow}>Notes</label>
            <textarea className={Style.fullrow}></textarea>

            <button className={Style.fullrow} onClick={doTheLog}>Submit</button>

        </div>
    )
}

export default AddPlant;