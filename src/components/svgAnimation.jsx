import React, { useEffect } from 'react';
import style from './svgAnimation.module.css'

const SVGAnimation = (props) => {

    const setCSS = () => {
        const paths = document.querySelectorAll(`svg path`);
        let animationOffSet = 0;
        const animationOffSetIncrement = .01;
        let duration = 2;
        const durationIncrement = 0;
        console.log(paths);

        for (let p of paths) {
            const length = p.getTotalLength();
            p.style.strokeDasharray = length;
            p.style.strokeDashoffset = length;
            p.style.animation = `${style.animateIn} ${duration += durationIncrement}s ease ${animationOffSet += animationOffSetIncrement}s forwards`;
        }
        try {
            document.querySelector(`svg`).style.animation = `${style.shakeIt} ${duration}s ease ${duration}s forwards`
        }
        catch {

        }
    }

    //run setCSS on load
    useEffect(() => {
        setCSS();
    });

    return (
        <div className={style.center}>
            {console.log(props)}
            {props.children}
        </div>
    );
}

export default SVGAnimation;