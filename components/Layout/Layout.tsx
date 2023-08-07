import styled from '@emotion/styled'
import { Footer } from '../Footer'
import { Header } from '../Header'

import { Box } from '@chakra-ui/react'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}
const ModalLayout = () => {
  return <Box></Box>
}

export { PrimaryLayout, ModalLayout }
