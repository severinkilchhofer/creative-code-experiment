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

const initialColors = ["#405DE6", "#5851D8", "#833AB4", "#C13584", "#E1306C",
    "#FD1D1D", "#F56040", "#F77737", "#FCAF45", "#FFDC80"];

