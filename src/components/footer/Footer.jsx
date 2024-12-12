import React from 'react';
import classes from "./Footer.module.css";
import Title from "../UI/title/Title";
import Text from "../UI/text/Text";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={[classes.footer__container, "container"].join(" ")}>
                <Title>
                    Contact
                </Title>
                <Text>
                    Пошта: opalenikvasya@gmail.com.
                </Text>
            </div>
        </footer>
    );
}
export default Footer;