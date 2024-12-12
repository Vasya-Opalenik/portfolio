import React, {useState} from 'react';
import classes from './Header.module.css';

const Header = ({scrolling}) => {
    const [nav, setNav] = useState([
        {title: "home", link: "#"},
        {title: "about", link: "#"},
        {title: "portfolio", link: "#"},
        {title: "contact", link: "#"},
    ]);

    let headerClass = [classes.header, scrolling ? classes.header__scrolling : ""].join(" ");


    return (
        <header className={headerClass}>
            <div className={[classes.header__container, "container"].join(' ')}>
                <a href="#" className={classes.header__logo}>
                    <img src="../../img/header/logo.png" alt={"Logo"}/>
                </a>
            </div>
        </header>
    );
};

export default Header;