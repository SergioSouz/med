import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { Link as LinkScroll } from "react-scroll";

export const ContainerSideBar = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${(props) => props.isOpen ? '100%' : '0'};
    top: ${(props) => props.isOpen ? '0' : '-100%'};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &.hover{
        color: #509BF0;
        transition: .2s ease-in-out;
    }
`;