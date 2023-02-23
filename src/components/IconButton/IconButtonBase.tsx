import { HTMLProps, ReactNode } from "react";
import styled from "styled-components";


interface props {
    children: ReactNode,
    buttonProps?: React.Component<HTMLProps<HTMLButtonElement>>
}

export default function IconButtonBase( {children, buttonProps} : props) {
    return (
        <IconButtonWrap { ...buttonProps } >
            {children}
        </IconButtonWrap>
    )
}

const IconButtonWrap = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 0;
    opacity: 80%;
    transition: all 500ms;
    
    &:hover {
        opacity: 100%;
        transform: scale(105%);
    }
    
    & img {
        width: 100%;
        filter: brightness(0) invert(1);        
    }

    
`