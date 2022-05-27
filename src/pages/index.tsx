import {useState} from "react"

//Components
import { Input } from "../components/Form/input"

import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react"


export default function Home() {

  const [oi, setOi] = useState(true)

  return (
    <Flex w="100vw"
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex as="form"  w="100%"  maxW={360} bg="gray.600" p="8" borderRadius={8} flexDir="column" bgColor="gray.800"> 
        
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="email" label="Senha"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
        
      </Flex>
    </Flex>
  ) 
}
