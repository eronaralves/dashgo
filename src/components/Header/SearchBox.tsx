import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

//Controlled components
//Uncontrolled components

export function SearchBox() {
  // const [search, setSearch] = useState('')
  const searchInputrRef = useRef<HTMLInputElement>(null)


  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      align="center"
    >
    <Input
      color="gray.50"
      variant="unstyled"
      px="2"
      mr="4"
      placeholder="Buscar na plataforma"
      _placeholder={{color: "gray.400"}}
      ref={searchInputrRef}/>
      <Icon as={RiSearch2Line} fontSize="20"/>
    </Flex>
  )
}