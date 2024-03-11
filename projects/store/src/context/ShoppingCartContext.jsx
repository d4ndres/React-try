import { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [ shoppingCart, setShoppingCart ] = useState([])
  
  return (
    <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}