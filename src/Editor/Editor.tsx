import styled from "styled-components";
import UserButton from "../components/IconButton/UserButton";
import DarkSection from "../components/Section/DarkSection";
import LightSection from "../components/Section/LightSection";

export default function Editor() {
    return (
        <EditorWrap>
            <DarkSection>
                <p>olá</p>
                <UserButton/>
            </DarkSection>
            <LightSection>
                <p>olá</p>
            </LightSection>
        </EditorWrap>
    )
}

const EditorWrap = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`