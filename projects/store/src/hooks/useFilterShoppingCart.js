import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext.jsx';

export function useFilterShoppingCart() {
  const { filters, setFilters } = useContext(FilterContext);

  const productsFiltered = (products) => {
    return products.filter( product => {
      return (
        product.price >= filters.price &&
        (
          filters.category == 'all' || product.category == filters.category
        )
      )
    })
  }

  const commitPrice = (price) => {
    setFilters({...filters, price })
  }

  const commitCategory = (category) => {
    setFilters({...filters, category })
  }

  return {
    filters,
    setFilters,
    productsFiltered,
    commitPrice,
    commitCategory
  }
}