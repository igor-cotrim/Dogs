import React, { useState } from 'react';

import { COMMENT_POST } from '../../api';
import Enviar from '../../assets/enviar.svg?component';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';

import styles from './styles.module.css'

const PhotoCommentsForm = ({ id, setPhotoComments }) => {
  const { request, error } = useFetch()
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)

    if (response.ok) {
      setComment('')
      setPhotoComments((comments) => [...comments, json])
    }

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={comment}
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
};

export default PhotoCommentsForm;
