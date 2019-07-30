import React from 'react';
import { useSelector } from "react-redux";
import Plant from './Plant'
import style from './Plants.module.css'
import image_add from '../graphics/round-add_circle_outline-24px.svg'

const Plants = () => {

    const plants = useSelector(state => state.plants);

    return (
        <div className={style.plants}>
            {plants.map((p, index) => {
                return <Plant key={index} name={p.plantname} description={p.notes} />
            })}
            <div className={style.add}> <a href="/add"><img src={image_add} alt="add Plant"/></a></div>
        </div>
    )
}

export default Plants;