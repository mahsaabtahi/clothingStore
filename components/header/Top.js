import React, { useState } from 'react';
import styles from "./styles.module.scss";
import {AiOutlineHome} from "react-icons/ai";
import {MdSecurity,MdAccountCircle} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs"; 
import {RiArrowDropDownFill}from "react-icons/ri";
import Link from "next/link";
import Usermenu from './UserMenu';

export default function Top({country}){
    const [loggedIn,setLoggedIn]= useState(true);
    const [visible,setVisible]= useState(false);
    return( <div className={styles.top}>
                <div className={styles.top__container}>
                    <div></div>
                  <ul className={styles.top__list}>
                  <li className={styles.li}>
                       <img src={country.flag} alt="" />
                        <span>{country.name}</span>
                    </li>
                    <li className={styles.li}>
                        <AiOutlineHome />
                        <span>خانه</span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer protection</span>
                    </li>
                     <li className={styles.li}>
                        <span>Customers Serveice</span>
                    </li>
                    <li className={styles.li}>
                        <span>راهنما</span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <Link href="/profile/whishlist">
                         <span>علاقه مندی ها</span>
                        </Link>
            
                    </li>
                    <li className={styles.li}
                    onMouseOver={()=>setVisible(true)}
                    onMouseLeave={()=>setVisible(false)}>
                    {
                        loggedIn ? (
                        <li className={styles.li}>
                        <div className={styles.flex}>
                            <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" />
                            <span>مهسا</span>
                            <RiArrowDropDownFill/>
        
                        </div></li>
                        ):(
                        <li className={styles.li}>
                        <div className={styles.flex}>
                            <MdAccountCircle />
                            <span>حساب کاربری</span>
                            <RiArrowDropDownFill/>
        
                        </div>
                        </li>
                     )
                    }
                    {
                        visible && <Usermenu loggedIn={loggedIn}/>
                    }
                
                    </li>
            </ul>
       </div>
    </div>
   );
}
 