import styled from "styled-components";
import UserButton from "../components/IconButton/UserButton";
import DarkSection from "../components/Section/DarkSection";
import LightSection from "../components/Section/LightSection";

export default function Editor() {
    return (
        <EditorWrap>
            <DarkSection>
                <HeaderWrap>
                    <div className="title">
                        <p>Tipo de diagrama</p>
                        <h1>Título do documento</h1>
                    </div>
                    <div className="icons">
                        <UserButton/>
                        <UserButton/>
                        <UserButton/>
                    </div>
                </HeaderWrap>    
            </DarkSection>

            <div className="gridEditor">
                <LightSection>
                    <p>olá</p>
                </LightSection>

                <DarkSection>
                    <p>oi</p>
                </DarkSection>
            </div>
            
        </EditorWrap>
    )
}

const EditorWrap = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    & .gridEditor {
        display: grid;
        min-height: 400px;
        grid-template-columns: 800px auto;
    }
`

const HeaderWrap = styled.section`
    display: grid;
    gap: 16px;
    grid-template-columns: auto 1fr;
    align-items: center;

    & .title {
        & p {
            color: #98C8FF;
            font-size: 0.8em;
            padding-bottom: 6px;
            font-weight: 800;
        }

        & h1 {
            font-weight: 700;
            font-size: 1.5em;
        }
    }

    & .icons {
        display: flex;
        gap: 16px;
        justify-content: flex-end;
    }
`