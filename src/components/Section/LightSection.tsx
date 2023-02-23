import { ReactNode } from "react";
import styled from "styled-components";


interface props {
    children: ReactNode
}

export default function LightSection( {children} : props) {
    return (
        <LightSectionnWrap>
            {children}
        </LightSectionnWrap>
    )
}

const LightSectionnWrap = styled.section`
    background-color: white;
    color: #333;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
`