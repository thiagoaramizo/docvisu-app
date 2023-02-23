import styled from 'styled-components'
import logo from '../../assets/logo.svg'


export default function Header() {
    return (
        <HeaderWrap>
            <Logo>
                <img src={logo} alt="DocVisu logo" />
            </Logo>
            
        </HeaderWrap>
    )
}

const HeaderWrap = styled.nav`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;
`

const Logo = styled.div`
    max-width: 200px;
    & img {
        width: 100%;
    }
`