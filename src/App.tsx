import * as React from "react";
import './App.css';
import {Spring} from "./animations/spring/Spring";
import {Slider} from "./animations/slider/Slider";
import {useEffect, useState} from "react";

// import "./styles.css";


const App = () => {
    const [initvalue, setValue] = useState(5000);

    useEffect(() => {
        console.log('app', initvalue);
        setValue(initvalue)
    }, [initvalue]);

    return (
        <>
            <div className="example-container">
                <Spring msValue={initvalue}/>
            </div>
            <Slider parentCallback={setValue}/>
        </>
    );
};

export default App;
