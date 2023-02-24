import { HTMLProps } from 'react'
import userIcon from '../../assets/icons/user.svg'
import IconButtonBase from './IconButtonBase'


interface props {
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

export default function UserButton( {onClick}: props ){
    return (
        <IconButtonBase onClick={onClick} text='Usuário'>
            <img src={userIcon} alt='User Button'/>
        </IconButtonBase>
    )
}