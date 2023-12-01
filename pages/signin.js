
import Header from '../components/header';
import Footer from '../components/footer';
import styles from "../styles/signin.module.scss";
import {BiLeftArrowAlt } from 'react-icons/bi';
import LoginInput from '../components/inputs/loginInputs/index.js'
import Link from 'next/link';
import { Form,Formik } from 'formik';
const signin = () => {
    return (
        <>
            <Header />
            <div className={styles.login}>
                <div className={styles.login__container}>
                    <div className={styles.login__header}>
                        <div className={styles.back__svg}>
                            <BiLeftArrowAlt /> 
                        </div>
                        <span>
                            we would be happy to join us ! <Link href="/">Go to store</Link>
                        </span>
                    </div>
                    <div className={styles.login__form}>
                        <h1>Sign in</h1>
                        <p>
                            ..........get access to one of the best eShoppong
                        </p>
                        <Formik>
                            {
                                (form)=>(
                                    <Form>
                                        <LoginInput icon="email" placeholder="Email Address"/>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div> 

            </div>
           
            <Footer country="Iran"/>
        </>
    );
}

export default signin;
