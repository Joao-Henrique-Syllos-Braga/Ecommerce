import A from "../A";
import H1 from "../H1";
import Header from "../Header";
import Input from "../Input";
import Li from "../Li";
import Nav from "../Nav";
import Ul from "../Ul";

import styles from "./header.module.css"

function NavBar () {
    return (
        <Header className={styles.header} inf={
        <>
        <Nav className={styles.nav} 
            inf={
                <>
                <H1 className={styles.title} text="E-commerce" />,
                <Input className={styles.search} type="text" placeholder="Pesquisar" />
                <Ul className={styles.links} inf={
                    <>
                        <Li className={styles.elementLink} inf={<A src="#Suport" inf="Suport" />} />
                        <Li className={styles.elementLink} inf={<A src="#Card" inf="Card" />} />
                        <Li className={styles.elementLink} inf={<A src="#Sobre" inf="Sobre" />} />
                    </>
                } />
                </>
            }/>
            
        </>
        } />
    )
}

export default NavBar;