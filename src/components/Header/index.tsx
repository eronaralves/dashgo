import { Flex, Icon, IconButton, useBreakpointValue,} from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { UseSideBasDrawer } from "../../contents/SideBarDrawerContext"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationsNav"
import { Profire } from "./Profire"
import { SearchBox } from "./SearchBox"

export function Header() {
  const { onOpen } = UseSideBasDrawer()


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
      <Flex 
        as="header"
        w="100vw"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
       >
         {!isWideVersion && (
           <IconButton
            aria-label="Open navegation"
            icon={<Icon as={RiMenuLine}/>}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
           >
           </IconButton>
         )}
         <Logo/>

        {isWideVersion && <SearchBox/>}

        <Flex
          align="center"
          ml="auto"
        > 
          <NotificationNav/>
          <Profire shoeProfiteData={isWideVersion}/>
        </Flex>
      </Flex>
  )
}