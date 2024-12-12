import React from 'react';
import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({portfolioList}) => {
    return (
        <ul className={classes.portfolio__list}>
            {portfolioList.map(portfolioItem =>
                <PortfolioItem key={portfolioItem.title} portfolioItem={portfolioItem}/>
            )}
        </ul>
    );
};

export default PortfolioList;