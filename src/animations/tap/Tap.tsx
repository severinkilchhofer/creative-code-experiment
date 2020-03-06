import * as React from "react";
import {motion} from "framer-motion";

import "./tap.css";

export const Tap = (props) => {
    return (
        <>
            <motion.a whileHover={{scale: 1.15}}
                      whileTap={{scale: 0.9}}
                      className="link"
                      href={props.link}>{props.text}</motion.a>
        </>
    );
};
