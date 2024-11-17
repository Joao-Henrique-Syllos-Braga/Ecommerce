import A from "../A";
import H1 from "../H1";
import Header from "../Header";
import Input from "../Input";
import Li from "../Li";
import Nav from "../Nav";
import Ul from "../Ul";

function NavBar () {
    return (
        <Header inf={
        <>
        <Nav 
            inf={
                <>
                <H1 text="E-commerce" />,
                <Input type="text" placeholder="Pesquisar" />
                <Ul inf={
                    <>
                        <Li inf={<A src="#Suport" inf="Suport" />} />
                        <Li inf={<A src="#Card" inf="Card" />} />
                        <Li inf={<A src="#Sobre" inf="Sobre" />} />
                    </>
                } />
                </>
            }/>
            
        </>
        } />
    )
}

export default NavBar;