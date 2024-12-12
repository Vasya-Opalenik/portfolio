import React from 'react';
import classes from "./Text.module.css";

const Text = ({children, className}) => {
    return (
        <p className={[className, classes.text].join(" ")}>
            {children}
        </p>
    );
};

export default Text;