import React from 'react';
import style from './Plant.module.css'
import image from '../plant.svg'

const Plant = ({ name, description }) => {

    //const [nextW, setNextW] = useState(0);

    const showContext = () => {
        console.log("context");
    }

    return (
        <div className={style.div}>
            <img className={style.imgCircle} src={image} onContextMenu={showContext} alt="Plants here :("></img>
            <h2 className={style.plantName}>{name}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}

export default Plant;
