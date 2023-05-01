import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext, CoffeeOnCart } from '../../../../contexts/CartContext'
import {
  Options,
  ProductContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductWrapper,
  RemoveButton,
  Separator,
} from './styles'

interface ProductProps {
  product: CoffeeOnCart
}

export function Product({ product }: ProductProps) {
  const [count, setCount] = useState(product.quantity || 1)
  const { removeProductFromCart, updateProductQuantityOnCart } =
    useContext(CartContext)

  function handleAddCount() {
    setCount(count + 1)
  }

  function handleSubstractCount() {
    if (count - 1 > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    updateProductQuantityOnCart(product, count)
  }, [count])

  return (
    <ProductContainer>
      <ProductWrapper>
        <img src={product.img} alt="" />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <Options>
            <ProductQuantity>
              <button onClick={() => handleSubstractCount()}>
                <Minus size={16} weight="bold" />
              </button>
              <p>{count}</p>
              <button onClick={() => handleAddCount()}>
                <Plus size={16} weight="bold" />
              </button>
            </ProductQuantity>
            <RemoveButton onClick={() => removeProductFromCart(product)}>
              <Trash size={16} />
              <p>REMOVER</p>
            </RemoveButton>
          </Options>
        </ProductInfo>
        <ProductPrice>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </ProductPrice>
      </ProductWrapper>
      <Separator />
    </ProductContainer>
  )
}
