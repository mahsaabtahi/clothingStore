
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
import { getProviders } from 'next-auth/react';

const initialvalues ={
    login_email :"",
    login_password:"",
    name:"",
    email:"",
    password:"",
    conf_password:"",
};
const signin = ({providers}) => {
    console.log(providers);
    const [user,setUser] =useState(initialvalues);
    const {
        login_email,
        login_password,
        name,
        email,
        password,
        conf_password,} =user;
    const handleChange= (e) =>{
        const {name, value}= e.target;
        setUser({...user ,[name] : value});
    };
    console.log(user);
    const loginValidation = Yup.object({
        login_email: Yup.string()
          .required("Email address is required.")
          .email("Please enter a valid email address."),
        login_password: Yup.string().required("Please enter a password"),
      });
      const registerValidation = Yup.object({
        name: Yup.string()
          .required("What's your name ?")
          .min(2, "First name must be between 2 and 16 characters.")
          .max(16, "First name must be between 2 and 16 characters.")
          .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
        email: Yup.string()
          .required(
            "You'll need this when you log in and if you ever need to reset your password."
          )
          .email("Enter a valid email address."),
        password: Yup.string()
          .required(
            "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
          )
          .min(6, "Password must be atleast 6 characters.")
          .max(36, "Password can't be more than 36 characters"),
        conf_password: Yup.string()
          .required("Confirm your password.")
          .oneOf([Yup.ref("password")], "Passwords must match."),
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
                        <div className={styles.login__socials}>
                            <span className={styles.or}> Or continue with</span>
                            <div className={styles.login__socials_wrap}>
                            {providers.map((provider) => (
                                <div key={provider.name}>
                                         <button
                                           className={styles.social__btn}
                                          onClick={() => signIn(provider.id)}
                                         >
                                        <img src={`../../icons/${provider.name}.png`} alt="" />
                                         Sign in with {provider.name}
                                            </button>
                                </div> 
    
                                   ))}
                            </div>
                        </div>
                    </div>
                </div> 




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
                        <h1>Sign Up</h1>
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
                        validationSchema={registerValidation}>
                            {
                                (form)=>(
                                    <Form>
                                        <LoginInput
                                         type="text"
                                         name="name"
                                         icon="user"
                                         placeholder="Full name"
                                         onchange={handleChange}/>
                                          <LoginInput
                                         type="text"
                                         name="email"
                                         icon="email"
                                         placeholder="Email Address"
                                         onchange={handleChange}/>
                                          <LoginInput
                                         type="password"
                                         name="password"
                                         icon="password"
                                         placeholder="Password"
                                         onchange={handleChange}/>
                                          <LoginInput
                                         type="password"
                                         name="conf_password"
                                         icon="password"
                                         placeholder="Re-Type Password"
                                         onchange={handleChange}/>
                                         <CircledIconBtn type="submit" text="Sign up"/>
                                         <div className={styles.forgot}>
                                            <Link href="/forgot">Forgot password ?</Link>
                                         </div>
                 
                                    </Form>
                                )
                            }
                        </Formik>
                        <div className={styles.login__socials}>
                            <span className={styles.or}> Or continue with</span>
                            <div className={styles.login__socials_wrap}>
                            {providers.map((provider) => (
                                <div key={provider.name}>
                                         <button
                                           className={styles.social__btn}
                                          onClick={() => signIn(provider.id)}
                                         >
                                        <img src={`../../icons/${provider.name}.png`} alt="" />
                                         Sign in with {provider.name}
                                            </button>
                                </div> 
    
                                   ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        
            <Footer country="Iran"/>
        </>
    );
}
export default signin ;

export async function getServerSideProps(context){
    const providers=Object.values( await getProviders());
    return {
        props :{providers},
    };
}