import React from 'react';
import Copyright from './CopyRight';
import Links from './Links';
import Newsletter from './NewsLetter';
import Payment from './Payment';
import Socials from './Socials';
import styles from "./styles.module.scss";
const Index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Links />
                <Socials />
                <Newsletter />
                <Payment />
                <Copyright />
            </div>

        </footer>
    );
}

export default Index;
