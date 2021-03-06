import React, { useState } from 'react';
import Style from './AddPlant.module.css'
import {useDispatch, useSelector} from "react-redux";
import {PLANT_DB} from '../idb';
import {add, idbAdd} from "../store/actions";

const AddPlant = () => {
    const dispatch = useDispatch();
    const defaultData = useSelector(state => state.defaultData);

    const date = new Date().toISOString().substr(0, 10);

    const [plantType, setPlantType] = useState("");
    const [displayName, setDisplayName] = useState("");

    const [waterDate, setWaterDate] = useState(date);
    const [waterInterval, setWaterInterval] = useState(0);

    const [dustDate, setDustDate] = useState(date);
    const [dustInterval, setDustInterval] = useState(0);

    const [fertilizerDate, setFertilizerDate] = useState(date);
    const [fertilizerInterval, setFertilizerInterval] = useState(0);

    const [doNotify, setDoNotify] = useState(true);

    const [notes, setNotes] = useState("");

    const getClassName = () => {
        return "addplant " + Style.grid;
    }

    const plantTypeChanged = (e) => {
        const newPlantType = e.target.value;
        setPlantType(newPlantType);

        updateVals(newPlantType);
    }

    const displayNameChanged = (e) => {
        setDisplayName(e.target.value);
    }

    const updateVals = (plantType) => {

        const botanica = defaultData[plantType];

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
    const updateWaterDate = (e) => {
        setWaterDate(e.target.value);
    }
    const updateDustDate = (e) => {
        setDustDate(e.target.value);
    }
    const updateFertilizerDate = (e) => {
        setFertilizerDate(e.target.value);
    }

    const updateNotes = (e) => {
        setNotes(e.target.value);
    }

    const updateDoNotify = (e) => {
        setDoNotify(e.target.checked);
    }

    const returnData = (data) => { 
        dispatch(add(data));
        dispatch(idbAdd(data, PLANT_DB));
    }

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
            "plantname": displayName,
            "botanicname": plantType,
            "planttype": "default",
            "place": "not defined",
            "picture": "plant.jpg",
            "plantGroup": "not defined",
            "statusOk": false,
            "alarm": doNotify,
            "dates": {
                "created": { "creationdate": new Date() },
                "water": { "last": "10.05.2019", "cycle": waterInterval, "history": [] },
                "dust": { "last": "10.05.2019", "cycle": dustInterval, "history": [] },
                "fertilizer": { "last": "10.05.2019", "cycle": fertilizerInterval, "history": [] },
                "repot": { "last": "10.05.2019", "cycle": "-1", "history": [] }
            },
            "notes": notes
        });
    }

    return (
        <div className={getClassName()}>
            <label htmlFor="botanicalName">Botanical Name</label>
            <input id="botanicalName" list="botanicalNames" value={plantType} onChange={plantTypeChanged}></input>
            <datalist id="botanicalNames">
                {
                    Object.getOwnPropertyNames(defaultData).map((elt, index) => {
                        return <option key={index}>{elt}</option> 
                })}
            </datalist>

            <label>DisplayName</label>
            <input value={displayName} onChange={displayNameChanged}></input>

            <label>Photo</label>
            <input type="file" name="image" accept="image/*"></input>

            <label>Last Date of water</label>
            <input type="date" value={waterDate} onChange={updateWaterDate}></input>
            <label>Water interval</label>
            <input type="number" value={waterInterval} onChange={updateWaterInterval}></input>

            <label>Last Date of de-dust</label>
            <input type="date" defaultValue={dustDate} onChange={updateDustDate}></input>
            <label>De-dust interval</label>
            <input type="number" value={dustInterval} onChange={updateDustInterval}></input>

            <label>Last Date of fertilization</label>
            <input type="date" defaultValue={fertilizerDate} onChange={updateFertilizerDate}></input>
            <label>Fertilization interval</label>
            <input type="number" value={fertilizerInterval} onChange={updateFertilizerInterval}></input>

            <label>Send notifications</label>
            <input className={Style.fancyYN} checked={doNotify} onChange={updateDoNotify} type="checkbox"></input>

            <label className={Style.fullrow}>Notes</label>
            <textarea value={notes} onChange={updateNotes} className={Style.fullrow}></textarea>

            <button className={Style.fullrow} type="submit" onClick={validateAndSave}>Submit</button>

        </div>
    )
}

export default AddPlant;