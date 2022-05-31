import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"
import Link from "next/link"
import { ActiveLink } from "../ActiveLink";

interface NavLinksProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string
}

export function NavLink({icon, children , href, ...rest}:NavLinksProps) {
  
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="28"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}