import React from 'react';
import classes from './Title.module.css'

const Title = ({children, titleType, color = "white", className}) => {
    let classElem = [className, classes.title, color === "black" ? classes.black : ""].join(" ");

    let elem = <h2 className={classElem}>{children}</h2>;

    if(titleType === 'title') {
        elem = <h1 className={classElem}>{children}</h1>;
    }

    return (
        elem
    );
};

export default Title;