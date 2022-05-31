
//Components
import { Input } from "../components/Form/input"
import { SubmitHandler, useForm }from"react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Flex, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"

type SignInFormData = {
  email: string
  password: string
}

const signInFromSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatório')
})

export default function Home() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFromSchema)
  })
  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }


  return (
    <Flex w="100vw"
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex as="form"  w="100%"  maxW={360} bg="gray.600" p="8" borderRadius={8} flexDir="column" bgColor="gray.800" onSubmit={handleSubmit(handleSignIn)}> 
        
        <Stack spacing="4">
          <Input 
            type="email" 
            name="email" 
            label="E-mail" 
            error={errors.email}
            {...register('email')}/>

          <Input 
            type="password" 
            name="email" 
            label="Senha"
            error={errors.password} 
            {...register('password')}/>

        </Stack>

        <Link href="/dashboard">
          <Button type="submit" mt="6" colorScheme="purple" size="lg"
            isLoading={formState.isSubmitting} disabled={errors.email || errors.password}>
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  ) 
}
