import Dogs from '../../assets/dogs-footer.svg?component';

import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Todos os direitos reservados.</p>
    </footer>
  )
};

export default Footer;
