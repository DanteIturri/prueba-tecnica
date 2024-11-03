import  { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './nav.css'

export const Nav: FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <nav>
      <button onClick={() => navigate('/')}>Inicio</button>
      <button onClick={() => navigate('/episodes')}>Episodios</button>
      <button onClick={() => navigate('/locations')}>Locaciones</button>
      <button onClick={() => navigate('/characters')}>Personajes</button>
    </nav>
    </>
  )
}
