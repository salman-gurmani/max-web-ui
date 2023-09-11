import styled from '@emotion/styled'
import { Footer } from '../Footer'
import { Header } from '../Header'

import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`
interface PrimaryLayoutProps {
  children: ReactNode
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
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
