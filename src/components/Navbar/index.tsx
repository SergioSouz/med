import React from "react";
import { 
    ContainerNavbar,
    Nav,
    NavbarLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu
} from "./styles";

import { FaBars } from "react-icons/fa";

type Props = {
    handleOpen: () => void
}

export function Navbar(props: Props){
    return(
            <Nav>
                <ContainerNavbar>
                    <NavbarLogo to="/">MedDoctorIA</NavbarLogo>
                    <MobileIcon onClick={props.handleOpen}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sobre">
                                Sobre
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="service">
                                Serviços
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="doc">
                                Documentação
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team">
                                Equipe
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </ContainerNavbar>  
            </Nav>
    )
}