import React, { useEffect, useState } from "react";

import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import Head from "../Head";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (password.validate()) {
      const body = {
        login,
        key,
        password: password.value
      }

      const { url, options } = PASSWORD_RESET(body)
      const { response } = await request(url, options)

      if (response.ok) {
        navigate('/login')
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title='Resetar senha' description="Pagina de resetar senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
};

export default LoginPasswordReset;
