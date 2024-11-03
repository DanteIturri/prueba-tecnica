import { FC } from 'react'
import Logo from '../../assets/Rick_And_Morty_Logo.svg';
import './header.css'

export const Header: FC = () => {
  return (
    <div className='container'>
        <img src={Logo} className='logo' alt="logo rick and morty" />
    </div>
  )
}
