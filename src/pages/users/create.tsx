import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm }from"react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

//Components
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

type SCreateusersFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUsersFromSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatório').min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUsers() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUsersFromSchema)
  })

  const errors = formState.errors


  const handleCreateUsers: SubmitHandler<SCreateusersFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Box>
      <Header/>
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar/>

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6","8"]}
          onSubmit={handleSubmit(handleCreateUsers)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuario</Heading>
        
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input
                name="name"
                type="text"
                label="Nome Completo"
                error={errors.name}
                {...register('name')}
              />

              <Input 
                name="email" 
                label="E-mail"
                type="email"
                error={errors.email} 
                {...register('email')}
                />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input 
                name="password" 
                type="password" 
                label="Senha"
                error={errors.password}  
                {...register('password')}
                />

              <Input  
                name="password_confirmation" 
                type="password" 
                label="Confirmacao da senha"
                error={errors.password_confirmation} 
                {...register('password_confirmation')}/>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit" 
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                 >Salvar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}