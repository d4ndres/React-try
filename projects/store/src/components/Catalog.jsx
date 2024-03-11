import catalog from '../mocks/products.json';
import { useFilterShoppingCart } from '../hooks/useFilterShoppingCart';
import { useShoppingCart } from '../hooks/useShoppingCart';

export function Catalog() {
  const { productsFiltered } = useFilterShoppingCart();
  const products = productsFiltered(catalog);
  
  const { addProduct } = useShoppingCart();

  return (
    <div>
      <h2>Catalog de la tienda</h2>
      <ul className='products'>
        {
          products.map( product => (
            <li key={product.id} className='product'>
              <img src={product.image} alt={product.title} />
              <div className='product-info'>
                <h4>{product.title}</h4>
                <p >
                  <span>{product.category}</span>
                  <span>${product.price}</span>
                </p>
                <button onClick={() => addProduct(product)}>Agregar al carrito</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}