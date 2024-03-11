import './App.css'
import { Filters } from './components/Filters'
import { Catalog } from './components/Catalog'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ShoppingCart } from './components/ShoppingCart'

export default function App() {

  return (
    <>
      <header>
        <h2>Shopping cart</h2>
        <Filters />
      </header>
      <ShoppingCartProvider>
        <ShoppingCart />
        <main>
          <Catalog />
        </main>
      </ShoppingCartProvider>
    </>
  )
}