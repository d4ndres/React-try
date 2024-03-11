import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext.jsx'

export function useShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  const addProduct = (product) => {
    const newCart = structuredClone(shoppingCart)
    const productIndex = newCart.findIndex(p => p.id === product.id)
    if( productIndex >= 0) {
      newCart[productIndex].quantity++
      setShoppingCart(newCart)
    } else {
      newCart.push({...product, quantity: 1})
      setShoppingCart(newCart)
    }
  }

  const removeProduct = (product) => {
    const newCart = structuredClone(shoppingCart)
    const productIndex = newCart.findIndex(p => p.id === product.id)
    if( productIndex >= 0) {
      newCart[productIndex].quantity--
      if(newCart[productIndex].quantity === 0) {
        newCart.splice(productIndex, 1)
      }
      setShoppingCart(newCart)
    }
  }

  return {
    shoppingCart,
    addProduct,
    removeProduct
  }
}
