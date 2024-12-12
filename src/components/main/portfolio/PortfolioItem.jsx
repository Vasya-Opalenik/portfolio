import React from 'react';
import classes from './Portfolio.module.css';
import Title from "../../UI/title/Title";

const PortfolioItem = ({portfolioItem}) => {
    return (
        <li className={classes.portfolio__item}>
            <img src={`../../../img/main/portfolio/${portfolioItem.title}.png`} alt={portfolioItem.title} />
            <Title color={"black"} className={classes.portfolioItem__title}>
                {portfolioItem.title}
            </Title>
            <a className={classes.portfolioItem__link} href={portfolioItem.link}>Посилання на сайт.</a>
            <a className={classes.portfolioItem__link}  href={portfolioItem.linkGithub}>Посилання на сторінку github.</a>
        </li>
    );
};

export default PortfolioItem;