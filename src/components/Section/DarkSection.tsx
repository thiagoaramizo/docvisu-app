import { ReactNode } from "react";
import styled from "styled-components";


interface props {
    children: ReactNode
}

export default function DarkSection( {children} : props) {
    return (
        <DarkSectionWrap>
            {children}
        </DarkSectionWrap>
    )
}

const DarkSectionWrap = styled.section`
    color: white;
    border: 1px solid white;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
`