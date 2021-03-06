import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Error from '../Error';
import Loading from '../Loading';
import Head from '../Head';
import PhotoContent from '../PhotoContent';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';

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
      <Head title={data.photo.title} description="Pagina de foto" />
      <PhotoContent single={true} data={data} />
    </section>
  )
  else return null
};

export default Photo;
