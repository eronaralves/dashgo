import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidBarDrawerProviderProps {
  children: ReactNode
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProfider({children}: SidBarDrawerProviderProps) {
  
  const disclouse = useDisclosure() 
  const router = useRouter() 

  useEffect(() => {
    disclouse.onClose()
  }, [router.asPath])
  
  return (
    <SideBarDrawerContext.Provider value={disclouse}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const UseSideBasDrawer = () => useContext(SideBarDrawerContext)