import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profire() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Eronar Alves</Text>
        <Text color="gray.300" fontSize="small">
          alveseronar@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Eronar Alves" src="https://avatars.githubusercontent.com/u/11879767?v="/>
    </Flex>

  )
}