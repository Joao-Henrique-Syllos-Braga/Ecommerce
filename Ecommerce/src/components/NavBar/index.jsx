import A from "../A";
import H1 from "../H1";
import Header from "../Header";
import Input from "../Input";
import Li from "../Li";
import Nav from "../Nav";
import Ul from "../Ul";

import styles from "./NavBar.module.css";

function NavBar () {
    return (
        <Header className={styles.header}>
        <Nav className={styles.nav}>
                <H1 className={styles.title}>E-commerce</H1>
                <Input className={styles.search} type="text" placeholder="Pesquisar" />
                <Ul className={styles.links}>
                        <Li className={styles.elementLink}>
                        <A src="#Suport">Support</A></Li>
                        
                        <Li className={styles.elementLink}>
                        <A src="#Card">Carrinho</A></Li>
                        
                        <Li className={styles.elementLink}>
                        <A src="#Sobre">Sobre</A>
                        </Li>
                </Ul>
                </Nav>
                </Header>
    )
}

export default NavBar;