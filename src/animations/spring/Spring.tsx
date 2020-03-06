import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

import "./spring.css";

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 300
};

export const Spring = (props) => {
    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        console.log('spring', props.msValue);
        setTimeout(() => setColors(shuffle(colors)), props.msValue);
    }, [colors]);

    return (
        <ul>
            {colors.map(background => (
                <motion.li
                    key={background}
                    layoutTransition={spring}
                    style={{ background }}
                />
            ))}
        </ul>
    );
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#AF008C", "#A309E1", "#AC1AFF", "#A700FF"];
