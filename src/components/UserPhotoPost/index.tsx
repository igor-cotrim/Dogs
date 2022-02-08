import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';
import Error from '../Error';
import Head from '../Head';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api';

import styles from './styles.module.css'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()
  const [img, setImg] = useState<any>({});

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)

    request(url, options)
  }

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste sua foto' description="Pagina de postar foto" />
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          >

          </div>
        )}
      </div>
    </section>
  )
};

export default UserPhotoPost;
