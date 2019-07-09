import React, {useState} from 'react';
import style from './Plant.module.css'
import image from '../graphics/plant.svg'
import check from '../graphics/round-check_circle_outline-24px.svg';

const Plant = ({ name, description }) => {

    const [selected, setSelected] = useState(false);

    const toggleSelection = (e) => {
        e.preventDefault();
        setSelected(!selected);
    }

    return (
        <div className={style.div}>
            <img className={style.imgCircle} src={!selected ? image : check} onClick={toggleSelection} alt="Plants here :("></img>
            <h2 className={style.plantName}>{name}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}

export default Plant;
