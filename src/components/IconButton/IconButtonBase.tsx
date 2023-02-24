import { HTMLProps, ReactNode } from "react";
import styled from "styled-components";


interface props {
    children: ReactNode,
    onClick? : React.MouseEventHandler<HTMLButtonElement>
    text?: string 
}

export default function IconButtonBase( {children, onClick, text} : props) {
    return (
        <Wrap>
            <IconButtonWrap onClick={onClick} >
                {children}
            </IconButtonWrap>
            { text ? (
                <div className="tooltip">
                    {text}
                </div>
            ) : ''}
        </Wrap>
    )
}

const Wrap = styled.div`
    position: relative;

    & .tooltip {
        font-size: 0.8em;
        font-weight: 700;
        background-color: rgba(255,255,255,0.1);
        color: #fff;
        text-align: center;
        padding: 8px;
        border-radius: 4px;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        bottom: -32px;
        visibility: hidden;
    }

    &:hover .tooltip {
        visibility: visible;
    }
`

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