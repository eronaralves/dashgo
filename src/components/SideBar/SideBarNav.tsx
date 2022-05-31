import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {

  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">DashBoard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuarios</NavLink>
      </NavSection>
      <Box  display="none">
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiDashboardLine} href="/forms" >Formulário</NavLink>
          <NavLink icon={RiContactsLine} href="/automation">Automação</NavLink>
        </NavSection>
      </Box>
      
    </Stack>
)
}