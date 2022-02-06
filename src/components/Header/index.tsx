import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../../assets/dogs.svg?component';
import { UserContext } from '../../contexts/UserContext';

import styles from './styles.module.css'

const Header = () => {
  const { data } = useContext<any>(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to='/conta'>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
