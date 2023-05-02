import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 40rem;
  height: 23.25rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px;

  input {
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border: none;
    border-radius: 6px;
    padding: 12px;
    width: 100%;
  }

  input.numero,
  input.bairro {
    width: 12.5rem;
  }

  input.uf {
    width: 3.75rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const LineForm = styled.div`
  display: flex;
  gap: 12px;
`
