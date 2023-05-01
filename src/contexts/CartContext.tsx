import { ReactNode, createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Coffee } from '../pages/Home/components/CoffeeList'

export interface CoffeeOnCart extends Coffee {
  quantity: number
  totalValue: number
}
interface CartContextType {
  products: CoffeeOnCart[]
  addProductToCart: (productToAdd: Coffee, quantity: number) => void
  removeProductFromCart: (productToRemove: CoffeeOnCart) => void
  updateProductQuantityOnCart: (
    productToUpdateQuantity: CoffeeOnCart,
    newQuantity: number,
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<CoffeeOnCart[]>(() => {
    const storagedCart = localStorage.getItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
    )

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  function addProductToCart(productToAdd: Coffee, quantity: number) {
    const findSameProduct = products.find(
      (product) => product.id === productToAdd.id,
    )

    if (findSameProduct) {
      const productToUpdate = {
        ...productToAdd,
        quantity,
        totalValue: productToAdd.price * quantity,
      }
      updateProductQuantityOnCart(
        productToUpdate,
        findSameProduct.quantity
          ? findSameProduct.quantity + quantity
          : quantity,
      )
      toast.info(
        'A quantidade do produto foi atualizada no carrinho com sucesso',
        {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        },
      )
    } else {
      setProducts((state) => [
        ...state,
        {
          ...productToAdd,
          quantity,
          totalValue: productToAdd.price * quantity,
        },
      ])
      toast.success('O produto foi adicionado ao carrinho', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  function removeProductFromCart(productToRemove: Coffee) {
    const productsListWithoutRemovedProduct = products.filter(
      (product) => product.id !== productToRemove.id,
    )

    setProducts(productsListWithoutRemovedProduct)
  }

  function updateProductQuantityOnCart(
    productToUpdateQuantity: CoffeeOnCart,
    newQuantity: number,
  ) {
    const productsListUpdated = products.map((product) => {
      if (productToUpdateQuantity.id === product.id) {
        return {
          ...product,
          quantity: newQuantity,
          totalValue: productToUpdateQuantity.price * newQuantity,
        }
      }

      return product
    })

    setProducts(productsListUpdated)
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
        removeProductFromCart,
        updateProductQuantityOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
