import styles from "./styles.module.scss";
import {MdAccountCircle} from "react-icons/md";
import Link from "next/link";
const Usermenu = ({loggedIn}) => {
    return (  
    <div className={styles.menu}>
        <h4>welcome to shoppay!</h4>
         {
             loggedIn ?(
                 <div  className={styles.flex}>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" className={styles.menu__img}  />
                     <div className={styles.col}>
                         <span>welcome back</span>
                         <h3>مهسا</h3>
                         <span>sign out</span>
                     </div>
                 </div>
             ): (
                 <div className={styles.flex}>
                     <button className="btn_primary">ثبت نام</button>
                     <button className="btn_outlined">ورود</button>
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
