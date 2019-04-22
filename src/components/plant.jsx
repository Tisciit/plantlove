import React from 'react';
import style from './plant.module.css'
import image from '../plant.svg'

const Plant = ({ name, description }) => {

    //const [nextW, setNextW] = useState(0);

    return (
        <div className={style.div}>
            <img className={style.imgCircle} src={image} alt="Plants here :("></img>
            <h3 className={style.plantName}>{name}</h3>
            <p className={style.description}>{description}</p>
            <div className={style.controls}>
                <button>Wasser</button>
                <button>Dünger</button>
                <button>Umpflanzen</button>
                <button>KP</button>
            </div>
        </div>
    );
}

export default Plant;
