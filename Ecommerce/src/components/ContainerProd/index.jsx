import styles from './ContainerProd.module.css';
import produtos from '../Products/list.jsx'; // Lista de produtos 
import Container from '../Container/index.jsx'; // Componente Container

function ContProd() {
    const containers = []; // Lista para armazenar as linhas 
    let items = []; // Lista temporária para armazenar os produtos de cada linha

    // Itera sobre todos os produtos
    for (let i = 0; i < produtos.length; i++) {
        items.push(produtos[i]); // Adiciona o produto à linha atual

        // Quando a linha atingir 5 produtos ou for o último produto
        if (items.length === 5 || i === produtos.length - 1) {
            containers.push(
                <div key={containers.length} className={styles.wrap}>
                    {items.map((item, index) => (
                        <div key={index}>{item}</div> // Adiciona cada produto na linha
                    ))}
                </div>
            );
            items = []; // Reseta a lista de produtos para a próxima linha
        }
    }

    return (
        <div className={styles.contProd}>
            {containers} {/* Renderizar todas as linhas de produtos */}
        </div>
    );
}

export default ContProd;
