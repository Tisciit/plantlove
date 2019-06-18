import React from 'react';
import style from './Settings.module.css'

const Settings = ({ name, description }) => {

    return (
        <div className={style.div}>
            <h3>Settings</h3>
           
            <p>Benachrichtigung:</p>
            <select className={style.daySpan} name="dayspan">
                <option value="1">Jeden Tag</option>
                <option value="2">Jeden 2. Tag</option>
                <option value="3">Jeden 3. Tag</option>
                <option value="4">Jeden 4. Tag</option>
                <option value="5">Jeden 5. Tag</option>
                <option value="6">Jeden 6. Tag</option>
                <option value="7">Einmal pro Woche</option>
            </select>

            <p>Uhrzeit:</p>
            <input type="time"></input>

            <p>Benutzername:</p>
            <input id="username" type="text"></input>

            <button>Änderungen speichern</button>
            </div>
    );
}

export default Settings;
