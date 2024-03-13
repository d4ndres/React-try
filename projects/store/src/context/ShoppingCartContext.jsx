import { useReducer, createContext } from 'react';


const initialState = []
const reduce = (state, action) => {
  const { type, payload } = action

  if (type == 'ADD_PRODUCT') {
    const newCart = structuredClone(state)
    const { id } = payload
    const productIndex = newCart.findIndex(p => p.id === id)
    if (productIndex >= 0) {
      newCart[productIndex].quantity++
    } else {
      newCart.push({ ...payload, quantity: 1 })
    }
    return newCart

  } else if (type == 'REMOVE_PRODUCT') {

    const newCart = structuredClone(state)
    const { id } = payload
    const productIndex = newCart.findIndex(p => p.id === id)
    if (productIndex >= 0) {
      newCart[productIndex].quantity--
      if (newCart[productIndex].quantity === 0) {
        newCart.splice(productIndex, 1)
      }
    }
    return newCart
  }

  return state
}

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(reduce, initialState)

  const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', payload: product })

  const removeProduct = (product) => dispatch({ type: 'REMOVE_PRODUCT', payload: product })


  return (
    <ShoppingCartContext.Provider value={{ shoppingCart: state, addProduct, removeProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}