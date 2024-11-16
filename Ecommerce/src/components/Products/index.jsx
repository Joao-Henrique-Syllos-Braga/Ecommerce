import styles from './Products.module.css';

function Product({ name, img, status, price }) {
    return (
      <div className={styles.container}>
        <h1>{name}</h1>
        <img src={img} alt={name} />
        <p><i>{status}</i></p>
        <h2>{price}</h2>
      </div>
    );
}

export default Product;