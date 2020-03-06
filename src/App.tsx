import * as React from "react";
import {Spring} from "./animations/spring/Spring";
import {Slider} from "./animations/slider/Slider";
import {useEffect, useState} from "react";
import {Tap} from "./animations/tap/Tap";

import './App.css';

const App = () => {
    const [initvalue, setValue] = useState(1500);

    useEffect(() => {
        setValue(initvalue)
    }, [initvalue]);

    return (
        <>
            <div className='container'>
                <div className="example-container">
                    <Spring msValue={initvalue}/>
                </div>
                <Slider parentCallback={setValue}/>
                <div className="footer">
                    <Tap text={'Previous Experiment'} link={'https://wschoeck.github.io/creativecode/'}/>
                    <Tap text={'Next Experiment'} link={'https://natasharuf.github.io/designcodeexperiment/'}/>
                </div>
            </div>
        </>
    );
};

export default App;
