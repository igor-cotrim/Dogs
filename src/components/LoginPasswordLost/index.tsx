import React from "react";

import { PASSWORD_LOST } from "../../api";
import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import Head from "../Head";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, error, loading, request } = useFetch()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (login.validate()) {
      const body = {
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      }

      const { options, url } = PASSWORD_LOST(body)
      await request(url, options)
    }
  }

  return (
    <section>
      <Head title='Perdeu a senha' description="Pagina de perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='email' {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
};

export default LoginPasswordLost;
