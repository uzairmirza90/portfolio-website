import { Container, Divider} from '@mui/material'
// import React from 'react'
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle'
import CryptoApi from '../../containers/CryptoApi/CryptoApi'
import '../APIs/APIs.scss'

const APIs = () => {
  return (
    <Container>
      <ContainerTitle title='Crypto Currency Api Stats' />
      <CryptoApi />
      <Divider />
    </Container>
  )
}

export default APIs