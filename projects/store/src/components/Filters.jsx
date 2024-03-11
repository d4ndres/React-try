import { useFilterShoppingCart } from "../hooks/useFilterShoppingCart"


export function Filters() {
  const { filters, commitPrice, commitCategory } = useFilterShoppingCart()

  const handlePrice = (ev) => {
    commitPrice(ev.target.value)
  }

  const handleCategory = (ev) => {
    commitCategory(ev.target.value)
  }

  return (
    <div className="filters">
      <div>
        <label htmlFor="price">Precio mínimo: $ {filters.price}</label>
        <input type="range" min="0" max="200" value={filters.price} onChange={handlePrice}/>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select name="" id="category" onChange={handleCategory}>
          <option value="all">all</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </div>
  )
}