import styled from "styled-components";

import { Link } from "react-router-dom";

export const Button = styled(Link)<{
    primary?: boolean,
    fontBig?: boolean,
    dark?: boolean,
    big?: boolean
}>`
    border-radius: 50px;
    background: ${(props) => props.primary ? '#509BF0' : '#010606'};
    white-space: nowrap;
    padding: ${(props) => props.big ? '14px 48px' : '12px 38px'};
    color: ${(props) => props.dark ? '#010606' : '#fff'};
    font-size: ${(props) => props.fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &.hover{
        transition: all .2s ease-in-out;
        background: ${(props) => props.primary ? '#01bf71' : '#010606'};
    }
`;