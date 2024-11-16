import styles from './Products.module.css';
import H1 from '../H1';
import Img from '../IMG';
import P from '../P';
import H2 from '../H2';

function Product({ name, img, status, price }) {
    return (
      <div className={styles.container}>
        <H1 text={name} />
        <Img src={img} alt={name} />
        <P text={<i>{status}</i>} />
        <H2 text={price} />
      </div>
    );
}

export default Product;