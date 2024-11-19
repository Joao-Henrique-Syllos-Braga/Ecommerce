import A from "../A";
import H1 from "../H1";
import Li from "../Li";
import Ul from "../Ul";
import Footers from "./footer.jsx";

function Footer() {
    return (
        <Footers className={styles.footer}>
            <H1 className={styles.h1}>E-commerce</H1>
            <Ul className={styles.LinksMidia}>
                <Li className={styles.links}><A className={styles.link} src="#GitHub" inf=""/></Li>
                <Li className={styles.links}><A className={styles.link} src="#Linkedin" inf=""/></Li>
                <Li className={styles.links}><A className={styles.link} src="#Curriculum" inf=""/></Li>
            </Ul>
        </Footers>
    )
}

export default Footer;