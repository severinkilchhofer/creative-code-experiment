import * as React from "react"
import {useState} from "react"

import './slider.css'

export const Slider = ({parentCallback}) => {
    const [slidervalue, changeSliderValue] = useState(1500);


    return (
        <><h1>{slidervalue}</h1>
            <div className="slidecontainer">
                <input type="range"
                       min="50"
                       max="1500"
                       onChange={(event) => {
                           changeSliderValue(event.target.valueAsNumber);
                           parentCallback(event.target.valueAsNumber);
                       }}
                       value={slidervalue}
                       className="slider"/>
            </div>
            <a href="https://wschoeck.github.io/creativecode/" className="button previous">Previous Experiment</a>
            <a href="https://natasharuf.github.io/designcodeexperiment/" className="button next">Next Experiment</a>
        </>
    );
};
