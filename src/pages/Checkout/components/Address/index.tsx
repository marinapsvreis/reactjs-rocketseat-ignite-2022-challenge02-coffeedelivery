import { MapPinLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Subtitle, Title, TitleArea } from '../../styles'
import { AddressContainer, Form, LineForm } from './styles'

export interface AddressType {
  cep: string
  numero?: string
  complemento?: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export function Address() {
  const [cep, setCep] = useState('')
  const [addressInfo, setAddressInfo] = useState<AddressType>({
    cep: '',
    numero: '',
    complemento: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  })

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            toast.error('CEP não encontrado na API viaCEP', {
              position: 'top-center',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            })
          } else {
            toast.success(
              'CEP encontrado na API viaCEP, formulário atualizado',
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

            setAddressInfo({
              cep,
              numero: '',
              complemento: '',
              logradouro: data.logradouro,
              bairro: data.bairro,
              localidade: data.localidade,
              uf: data.uf,
            })
          }
        })
        .catch((error) => console.log(error))
    }
  }, [cep])

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:address-state-1.0.0',
      JSON.stringify(addressInfo),
    )
  }, [addressInfo])

  return (
    <AddressContainer>
      <TitleArea>
        <MapPinLine size={22} />
        <div>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </div>
      </TitleArea>
      <Form>
        <LineForm>
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value)
            }}
          />
        </LineForm>
        <LineForm>
          <input
            type="text"
            placeholder="Rua"
            value={addressInfo.logradouro}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                logradouro: e.target.value,
              })
            }}
          />
        </LineForm>
        <LineForm>
          <input
            className="numero"
            type="text"
            placeholder="Número"
            value={addressInfo.numero}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                numero: e.target.value,
              })
            }}
          />
          <input
            type="text"
            placeholder="Complemento"
            value={addressInfo.complemento}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                complemento: e.target.value,
              })
            }}
          />
        </LineForm>
        <LineForm>
          <input
            className="bairro"
            type="text"
            placeholder="Bairro"
            value={addressInfo.bairro}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                bairro: e.target.value,
              })
            }}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={addressInfo.localidade}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                localidade: e.target.value,
              })
            }}
          />
          <input
            className="uf"
            type="text"
            placeholder="UF"
            value={addressInfo.uf}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                uf: e.target.value,
              })
            }}
          />
        </LineForm>
      </Form>
    </AddressContainer>
  )
}
