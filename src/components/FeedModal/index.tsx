import React, { useEffect } from 'react';

import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';

import styles from './styles.module.css'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  const handleOutsideClick = (event: React.FormEvent) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent single={false} data={data} />}
    </div>
  )
};

export default FeedModal;
