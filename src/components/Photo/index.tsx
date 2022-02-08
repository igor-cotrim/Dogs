import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';

import styles from './styles.module.css'

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data) return (
    <section className='container mainContainer'>
      <PhotoContent single={true} data={data} />
    </section>
  )
  else return null
};

export default Photo;
