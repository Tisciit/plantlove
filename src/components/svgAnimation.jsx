import React, {Component} from 'react';
import style from './svgAnimation.module.css'

class SVGAnimation extends Component {

    setCSS() {
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

    componentDidMount() {
        this.setCSS();
    }

    render() {
        return (
            <div className={style.center}>
                {this.props.children}
            </div>
        );
    }
}

export default SVGAnimation;