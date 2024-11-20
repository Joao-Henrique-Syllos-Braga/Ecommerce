import A from "../A";
import H1 from "../H1";
import Li from "../Li";
import Ul from "../Ul";
import Footers from "./footer";
import styles from "./Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
    return (
        <Footers className={styles.footer}>
            <H1>E-commerce</H1>
            <Ul className={styles.links}>
                <Li>
                    <A className={styles.linkA} href="#github" aria-label="GitHub">
                        <i className="bi bi-github"></i>
                    </A>
                </Li>
                <Li>
                    <A className={styles.linkA} href="#linkedin" aria-label="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                    </A>
                </Li>
                <Li>
                    <A className={styles.linkA} href="#youtube" aria-label="YouTube">
                        <i className="bi bi-youtube"></i>
                    </A>
                </Li>
            </Ul>
        </Footers>
    );
}

export default Footer;