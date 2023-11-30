import styles from "./styles.module.scss";
import {IoLocationSharp} from 'react-icons/io5'
const Copyright = () => {
    return (
        <div className={styles.footer__copyright}>
            <section>
            تمام حقوق مادی و معنوی این وبسایت در اختیار فروشگاه اینترنتی سله‌بن می‌باشد 2023 © سله بن
            </section>
            <section>
                <ul>
                    <li>
                        <a >
                            <IoLocationSharp /> Iran 
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Copyright;
