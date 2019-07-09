import React from 'react';
import { useSelector } from "react-redux";
import Plant from './Plant'
import style from './Plants.module.css'

const Plants = () => {

    const plants = useSelector(state => state.plants);

    return (
        <div className={style.plants}>
            {plants.map((p, index) => {
                return <Plant key={index} name={p.plantname} description={p.notes} />
            })}
        </div>
    )
}

export default Plants;