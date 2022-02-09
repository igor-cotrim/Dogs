import { useContext } from "react";
import { Link } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import Head from "../Head";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../contexts/UserContext";

import stylesBtn from '../Button/styles.module.css'
import styles from './styles.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin, error, loading } = useContext<any>(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title='Login' description="Pagina de Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link
        className={styles.perdeu}
        to='/login/perdeu'
      >
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
