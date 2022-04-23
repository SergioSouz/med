import React from "react";
import { 
    CloseIcon, 
    ContainerSideBar, 
    Icon,
    SideBarLink,
    SideBarWrapper,
    SideBarMenu 
} from "./styles";

type Props = {
    isOpen: boolean;
    handleOpen: () => void
}

export function SideBar(props: Props){
    return(
        <ContainerSideBar isOpen={props.isOpen} onClick={props.handleOpen}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/" onClick={props.handleOpen}>
                        Home
                    </SideBarLink>
                    <SideBarLink to="sobre" onClick={props.handleOpen}>
                        Sobre
                    </SideBarLink>
                    <SideBarLink to="services" onClick={props.handleOpen}>
                        Serviços
                    </SideBarLink>
                    <SideBarLink to="doc" onClick={props.handleOpen}>
                        Documentação
                    </SideBarLink>
                    <SideBarLink to="team" onClick={props.handleOpen}>
                        Equipe
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </ContainerSideBar>
    )
}