import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import MinhasFotos from '../../assets/feed.svg?component';
import Estatisticas from '../../assets/estatisticas.svg?component';
import AdicionarFoto from '../../assets/adicionar.svg?component';
import Sair from '../../assets/sair.svg?component';
import { UserContext } from '../../contexts/UserContext';
import useMedia from '../../hooks/useMedia';

import styles from './styles.module.css'

const UserHeaderNav = () => {
  const { userLogout } = useContext<any>(UserContext)
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem)')

  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        >
        </button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  )
};

export default UserHeaderNav;
