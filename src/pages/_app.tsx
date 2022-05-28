import {AppProps} from "next/app"
import {ChakraProvider} from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { SideBarDrawerProfider } from "../contents/SideBarDrawerContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProfider>
        <Component {...pageProps} />
      </SideBarDrawerProfider>
    </ChakraProvider>
  )
}

export default MyApp
