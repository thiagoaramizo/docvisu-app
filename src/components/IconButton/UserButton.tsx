import { HTMLProps } from 'react'
import userIcon from '../../assets/icons/user.svg'
import IconButtonBase from './IconButtonBase'


interface props {
    buttonProps?: React.Component<HTMLProps<HTMLButtonElement>>
}

export default function UserButton( {buttonProps}: props ){
    return (
        <IconButtonBase {...buttonProps}>
            <img src={userIcon} alt='User Button'/>
        </IconButtonBase>
    )
}