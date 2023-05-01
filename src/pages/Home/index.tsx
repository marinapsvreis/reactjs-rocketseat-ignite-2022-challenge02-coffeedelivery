import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BackgroundEffect from '../../assets/background-effect.png'
import MainImg from '../../assets/main-image-coffee-delivery.png'
import { CoffeeList } from './components/CoffeeList'
import {
  BackgroundEffectImg,
  CapaContainer,
  Dot,
  DotBall,
  DotsContainer,
  DotsContainerLeft,
  DotsContainerRight,
  HomeContainer,
  ImgHome,
} from './styles'

export function Home() {
  return (
    <>
      <BackgroundEffectImg src={BackgroundEffect} alt="background effect" />
      <HomeContainer>
        <CapaContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
            <DotsContainer>
              <DotsContainerLeft>
                <Dot>
                  <DotBall className="dotOrange">
                    <ShoppingCart size={16} weight="fill" color="#fff" />
                  </DotBall>
                  <p>Compra simples e segura</p>
                </Dot>
                <Dot>
                  <DotBall className="dotYellow">
                    <Timer size={16} weight="fill" color="#fff" />
                  </DotBall>
                  <p>Entrega rápida e rastreada</p>
                </Dot>
              </DotsContainerLeft>
              <DotsContainerRight>
                <Dot>
                  <DotBall className="dotBrown">
                    <Package size={16} weight="fill" color="#fff" />
                  </DotBall>
                  <p>Embalagem mantém o café intacto</p>
                </Dot>
                <Dot>
                  <DotBall className="dotPurple">
                    <Coffee size={16} weight="fill" color="#fff" />
                  </DotBall>
                  <p>O café chega fresquinho até você</p>
                </Dot>
              </DotsContainerRight>
            </DotsContainer>
          </div>
          <ImgHome src={MainImg} alt="um copo de café com sementes"></ImgHome>
        </CapaContainer>
      </HomeContainer>
      <CoffeeList />
    </>
  )
}
