import React from 'react';
import Title from "../../UI/title/Title";
import Text from "../../UI/text/Text";
import classes from "./About.module.css"

const About = () => {
    return (
        <section className={classes.about}>
            <div className={"container"}>
                <Title color={"black"} className={classes.about__title}>
                    About Me.
                </Title>
                <Text>
                    Програмуванням я зацікавився у 14 років, а зараз мені 16. Сфера, яку я обрав, — це frontend-розробка. Мій шлях починався так само, як у більшості: я вивчив HTML та CSS. Але далі мене затягнуло, і я вже дібрався до JS, не лише до його основ, а й до більш складних елементів. Наразі я можу зверстати майже будь-який сайт, використовуючи:
                    <br/>
                    HTML — мова розмітки. <br/>
                    CSS — мова стилів. <br/>
                    JS — мова програмування, функціонал якої значно ширший. У браузері за допомогою API ми додаємо певні скрипти (сценарії) для інтерактивності або більш складної анімації. <br/>
                </Text>
                <Text>
                    <span className={classes.about__boldText}>Також я використовую для верстки:</span> <br/>
                    SASS (SCSS) — це скриптова мова, яка інтерпретується в CSS. З нею простіше й лаконічніше писати. <br/>
                    Gulp — це таск-менеджер для збирання проєкту, написаний на JS. Він у мене інтерпретує SASS у CSS, мініфікує файли, створює різні формати зображень і виконує інші важливі завдання, потрібні розробнику, але не споживачу.
                </Text>
                <br/>
                <Text>
                    <span className={classes.about__boldText}>Коментар:</span> Для верстки я не використовую Bootstrap мені зручніше без нього.
                </Text>
                <br/>
                <Text>
                    <span className={classes.about__boldText}>Плани на майбутнє</span> <br/>
                    Наразі я вчу фреймворк під назвою React, за допомогою якого створюється повноцінний, нестатичний вебсайти. Наразі я розглянув поверхнево:
                    <br/>
                    ReactCore, <br/>
                    ReactDOM, <br/>
                    React-transition-group, <br/>
                    React-router-dom, <br/>
                    axios <br/>
                </Text>
            </div>
        </section>
    );
}

export default About;