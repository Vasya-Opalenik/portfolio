import React from 'react';
import classes from "./Portfolio.module.css"
import Title from "../../UI/title/Title";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
    const [webSites, setWebSites] = React.useState([
        {title: "Templates", link: "https://vasya-opalenik.github.io/Templates/", linkGithub: "https://github.com/Vasya-Opalenik/Templates" },
        {title: "Panto", link: "https://vasya-opalenik.github.io/Panto/", linkGithub: "https://github.com/Vasya-Opalenik/Panto"},
        {title: "Boldo", link: "https://vasya-opalenik.github.io/Boldo/", linkGithub: "https://github.com/Vasya-Opalenik/Boldo"},
        {title: "snake-game", link: "https://vasya-opalenik.github.io/snake-game/", linkGithub: "https://github.com/Vasya-Opalenik/snake-game"},
        {title: "tic-tac-toe", link: "https://vasya-opalenik.github.io/tic-tac-toe/", linkGithub: "https://github.com/Vasya-Opalenik/tic-tac-toe"},
        {title: "one-piece", link: "https://vasya-opalenik.github.io/one-piece/", linkGithub: "https://github.com/Vasya-Opalenik/one-piece"},
        {title: "BarcaWebsite", link: "https://vasya-opalenik.github.io/BarcaWebsite/", linkGithub: "https://github.com/Vasya-Opalenik/BarcaWebsite"},
        {title: "YourBank", link: "https://vasya-opalenik.github.io/YourBank/", linkGithub: "https://github.com/Vasya-Opalenik/YourBank"},
    ]);

    return (
        <section className={classes.portfolio}>
            <div className="container">
                <Title color={"black"} className={classes.portfolio__title}>
                    Portfolio
                </Title>
                <PortfolioList portfolioList={webSites}/>
            </div>
        </section>
    );
}
export default Portfolio;