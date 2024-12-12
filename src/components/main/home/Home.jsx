import React from 'react';
import classes from './Home.module.css';
import Title from './../../UI/title/Title';
import Text from './../../UI/text/Text';


const Home = () => {
    return (
        <section className={classes.home}>
            <div className={[classes.home__container, "container"].join(" ")}>
                <div className={classes.home__content}>
                    <Title titleType={"title"}>
                        Привіт, моє ім'я Вася і я <br/><span style={{color: "red"}}>frontend</span> розробник.
                    </Title>
                    <Text>
                        На цьому сайті ви можете побачити мої роботи, лист технологій якими я володію, прочитати трохи про
                        мене та отримати мої контакти.
                    </Text>
                </div>
                <img className={classes.home__image} src="../../../img/main/home.png" alt="logo"/>
            </div>
        </section>
    );
}

export default Home;