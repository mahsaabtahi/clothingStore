import Top from "./Top.js";
import styles from "./styles.module.scss";
import Main from "./Main";
export  default function Header({country}) {
    return (
        <div>
            <Top country={country}/>
            <Main />
       
        </div>
    );
}