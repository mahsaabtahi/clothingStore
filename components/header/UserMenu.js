import styles from "./styles.module.scss";
import {MdAccountCircle} from "react-icons/md";
import Link from "next/link";
import { signOut,signIn } from "next-auth/react";
const Usermenu = ({session}) => {
    return (  
    <div className={styles.menu}>
        <h4>welcome to shoppay!</h4>
         {
             session ?(
                 <div  className={styles.flex}>
                    <img src={session.user.image} alt="" className={styles.menu__img}  />
                     <div className={styles.col}>
                         <span>welcome back</span>
                         <h3>{session.user.name}</h3>
                         <span onClick={()=>signOut()}>sign out</span>
                     </div>
                 </div>
             ): (
                 <div className={styles.flex}>
                     <button className="btn_primary">ثبت نام</button>
                     <button className="btn_outlined" 
                     onClick={() => signIn()}>ورود</button>
                 </div> 

             )
         }
         <ul>
             <li>
                 <Link href="/profile">حساب کاربری</Link>
                 
             </li>
             <li>
                <Link href="/profile/orders">سفارش ها</Link>
             </li>
             <li>
                <Link href="/profile/messages">پیام ها</Link>
             </li>
             <li>
                <Link href="/profile/whishlist">علاقه مندی ها</Link>
             </li>
         </ul>

    </div>
    );
}

export default Usermenu;
