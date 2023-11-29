import styles from "./styles.module.scss";
import {AiOutlineHome} from "react-icons/ai";
import {MdSecurity,MdAccountCircle} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs"; 
import {RiArrowDropDownFill}from "react-icons/ri";
import Link from "next/link";

export default function Top(){
    return( <div className={styles.top}>
                <div className={styles.top__container}>
                    <div></div>
                  <ul className={styles.top__list}>
                    <li>
                        <AiOutlineHome />
                        <span>خانه</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer protection</span>
                    </li>
                     <li>
                        <span>Customers Serveice</span>
                    </li>
                    <li>
                        <span>راهنما</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <Link href="/profile/whishlist">
                         <span>علاقه مندی ها</span>
                        </Link>
            
                    </li>
                    <li>
                    <div className={styles.flex}>
                        <MdAccountCircle />
                        <span>حساب کاربری</span>
                        <RiArrowDropDownFill/>
    
                    </div>
                </li>
            </ul>
       </div>
    </div>
   );
}
 