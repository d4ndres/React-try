import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext.jsx'



export function useShoppingCart() {
  const { shoppingCart, addProduct, removeProduct } = useContext(ShoppingCartContext)



  return {
    shoppingCart,
    addProduct,
    removeProduct
  }
}
