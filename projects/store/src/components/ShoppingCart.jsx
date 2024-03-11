import { useShoppingCart } from '../hooks/useShoppingCart.js'

export function ShoppingCart() {
  const { shoppingCart, addProduct, removeProduct } = useShoppingCart()

  return (
    <aside className='shoppingCart'>
      <h2 className='title'>Bill</h2>
      <ul className='productsInCart'>
        {
          shoppingCart.map(product => (
            <li key={product.id} className='product inCart'>
              <img src={product.image} alt={product.title} />
              <div className='product-info'>
                <div>
                  <p>{product.title}</p>
                  <p>Quantity: {product.quantity}</p>
                  <small>
                    Price: $
                    {
                      (product.price * product.quantity).toFixed(2)
                    }
                  </small>
                </div>
                <div className='controls'>
                  <button onClick={() => addProduct(product)}>➕</button>
                  <button onClick={() => removeProduct(product)}>➖</button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <div className='bill'>
        <button>
          Pagar: $
          <span>
            {
              shoppingCart.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2)
            }
          </span>
        </button>
      </div>
    </aside>
  )
}