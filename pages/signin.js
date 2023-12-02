
import Header from '../components/header';
import Footer from '../components/footer';
import styles from "../styles/signin.module.scss";
import {BiLeftArrowAlt } from 'react-icons/bi';
import LoginInput from '../components/inputs/loginInputs';
import Link from 'next/link';
import { Form,Formik } from 'formik';
import * as Yup from 'yup';
import CircledIconBtn from "../components/buttons/circledIconBtn";
import { useState } from 'react';

const initialvalues ={
    login_email :"",
    login_password:"",
}
const signin = () => {
    const [user,setUser] =useState(initialvalues);
    const {login_email,login_password} =user;
    const handleChange= (e) =>{
        const {name, value}= e.target;
        setUser({...user ,[name] : value});
    };
    console.log(user);
    const loginValidation=Yup.object({
        login_email:Yup.string().required("Email address is required.")
        .email("Please enter a valid email address"),
    });
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
                        <Formik
                        enableReinitialize
                        initialValues={
                            {
                                login_email,
                                login_password,
                            }
                        }
                        validationSchema={loginValidation}>
                            {
                                (form)=>(
                                    <Form>
                                        <LoginInput
                                         type="text"
                                         name="login_email"
                                         icon="email"
                                         placeholder="Email Address"
                                         onchange={handleChange}/>
                                          <LoginInput
                                         type="password"
                                         name="login_password"
                                         icon="password"
                                         placeholder="Password"
                                         onchange={handleChange}/>
                                         <CircledIconBtn type="submit" text="Sing in"/>
                                         <div className={styles.forgot}>
                                            <Link href="/forgot">Forgot password ?</Link>
                                         </div>
                 
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
export default signin ;
