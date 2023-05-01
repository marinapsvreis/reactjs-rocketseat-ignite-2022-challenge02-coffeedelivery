import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeList'

interface CartContextType {
  products: Coffee[]
  addProductToCart: (product: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
    )

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  function addProductToCart(product: Coffee) {
    setProducts((state) => [...state, product])
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(products)
    localStorage.setItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
      stateJSON,
    )
  }, [products])

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
