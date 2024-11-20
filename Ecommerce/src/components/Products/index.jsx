import styles from './Products.module.css';
import H1 from '../H1';
import Img from '../IMG';
import P from '../P';
import H2 from '../H2';

function Product({ name, img, status, price }) {
    return (
        <div className={styles.container}>
            <H1>{name}</H1>
            <Img src={img} alt={name} />
            <P><i>{status}</i></P>
            <H2>{price}</H2>
        </div>
    );
}

export default Product;
