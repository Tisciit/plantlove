import React, { useState } from 'react';
import Style from './AddPlant.module.css'

const AddPlant = () => {

    const date = new Date().toISOString().substr(0, 10);

    const [waterInterval, setWaterInterval] = useState(0);
    const [dustInterval, setDustInterval] = useState(0);
    const [fertilizerInterval, setFertilizerInterval] = useState(0);

    const [waterDate, setWaterDate] = useState(date);
    const [dustDate, setDustDate] = useState(date);
    const [fertilizerDate, setFertilizerDate] = useState(date);

    const getClassName = () => {
        return "addplant " + Style.grid;
    }

    const botanicals = {
        Pilea: {
            c1: 1,
            c2: 2,
            c3: 3,
        },
        Monstera: {
            c1: 4,
            c2: 5,
            c3: 6
        },
    }

    const updateVals = (e) => {

        const botanica = botanicals[e.target.value];

        if (botanica) {
            setWaterInterval(botanica.c1);
            setDustInterval(botanica.c2);
            setFertilizerInterval(botanica.c3);
        }
    }

    const updateWaterInterval = (e) => {
        setWaterInterval(e.target.value);
    }
    const updateDustInterval = (e) => {
        setDustInterval(e.target.value);
    }
    const updateFertilizerInterval = (e) => {
        setFertilizerInterval(e.target.value);
    }

    const returnData = (data) => { }

    const validateAndSave = (e) => {
        console.log(waterInterval);
        console.log(dustInterval);
        console.log(fertilizerInterval);

        e.preventDefault();
        /** Validation rules
         * 1. intervals have to be numbers
         * 2. dates have to be valid dates
         * 3. image is attached (optional, preselection of default images)
        */

        returnData({
            "id": 0,
            "plantname": "Palm",
            "botanicname": "Pflanza Botanica",
            "planttype": "Neu/Ableger/...",
            "place": "Office",
            "picture": "plant.jpg",
            "plantGroup": "Office Windows",
            "statusOk": false,
            "alarm": true,
            "dates": {
                "created": { "creationdate": new Date() },
                "water": { "last": "10.05.2019", "cycle": waterInterval, "history": [] },
                "dust": { "last": "10.05.2019", "cycle": dustInterval, "history": [] },
                "fertilizer": { "last": "10.05.2019", "cycle": fertilizerInterval, "history": [] },
                "repot": { "last": "10.05.2019", "cycle": "-1", "history": [] }
            },
            "notes": "Das ist eine Notiz!"
        });
    }

    return (
        <div className={getClassName()}>
            <label htmlFor="botanicalName">Botanical Name</label>
            <input id="botanicalName" list="botanicalNames" onChange={updateVals}></input>
            <datalist id="botanicalNames">
                <option>Monstera</option>
                <option>Pilea</option>
            </datalist>

            <label>DisplayName</label>
            <input></input>

            <label>Photo</label>
            <input type="file" name="image" accept="image/*"></input>

            <label>Last Date of water</label>
            <input type="date" value={waterDate}></input>
            <label>Water interval</label>
            <input type="number" value={waterInterval} onInput={updateWaterInterval}></input>

            <label>Last Date of de-dust</label>
            <input type="date" defaultValue={date}></input>
            <label>De-dust interval</label>
            <input type="number" value={dustInterval} onInput={updateDustInterval}></input>

            <label>Last Date of fertilization</label>
            <input type="date" defaultValue={date}></input>
            <label>Fertilization interval</label>
            <input type="number" value={fertilizerInterval} onInput={updateFertilizerInterval}></input>

            <label>Send notifications</label>
            <input className={Style.fancyYN} type="checkbox"></input>

            <label className={Style.fullrow}>Notes</label>
            <textarea className={Style.fullrow}></textarea>

            <button className={Style.fullrow} type="submit" onClick={validateAndSave}>Submit</button>

        </div>
    )
}

export default AddPlant;