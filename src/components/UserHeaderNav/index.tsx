import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import MinhasFotos from '../../assets/feed.svg?component';
import Estatisticas from '../../assets/estatisticas.svg?component';
import AdicionarFoto from '../../assets/adicionar.svg?component';
import Sair from '../../assets/sair.svg?component';
import { UserContext } from '../../contexts/UserContext';

import styles from './styles.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext<any>(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
};

export default UserHeaderNav;
