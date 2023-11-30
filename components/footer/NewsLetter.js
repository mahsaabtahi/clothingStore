import styles from "./styles.module.scss";
import Link from 'next/link';
const Newsletter = () => {
    return (
        <div  className={styles.footer__newsletter}>
            <h3>برای اطلاع از تخفیفات، محصولات جدید و آخرین اخبار در خبرنامه ما عضو شوید</h3>
            <div className={styles.footer__flex}>
                <input type="text" placeholder="Your Email Address " />
                <button className={styles.btn_primary}>SUBSCRIBE</button>
            </div>
            <p>
              By clicking the SUBSCRIBE button, you are agreeing to{" "}
            <Link href="">our Privacy & Cookie Policy</Link>
             </p>
            
        </div>
    );
}

export default Newsletter;
