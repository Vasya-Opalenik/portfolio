import React from 'react';
import classes from './Main.module.css';
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {
    return (
        <main className={classes.main}>
            <Home />
            <About/>
            <Portfolio />
        </main>
    );
};

export default Main;