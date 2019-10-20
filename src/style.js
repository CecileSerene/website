import { color } from './Constants';
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Title = styled.p`
  color: ${color.accent};
  font-size: 50px;
  aligne: center;
`

