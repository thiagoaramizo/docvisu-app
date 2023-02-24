import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import UserButton from '../IconButton/UserButton'


export default function Header() {
    return (
        <HeaderWrap>
            <div className='headerGrid'>
                <Logo>
                    <img src={logo} alt="DocVisu logo" />
                </Logo>
                <div className='icons'>
                    <UserButton onClick={ ()=> alert('Usuário') }/>
                    <UserButton/>
                    <UserButton/>
                </div>
            </div>   
        </HeaderWrap>
    )
}

const HeaderWrap = styled.nav`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;

    & .headerGrid {
        display: grid;
        gap: 16px;
        grid-template-columns: auto 1fr;
        align-items: center;

        & .icons {
            display: flex;
            gap: 16px;
            justify-content: flex-end;
        }
    }
`

const Logo = styled.div`
    max-width: 200px;
    & img {
        width: 100%;
    }
`