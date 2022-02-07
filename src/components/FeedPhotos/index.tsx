import { useEffect } from 'react';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';

import styles from './styles.module.css'

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { json, response } = await request(url, options)
      console.log(json);

    }
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    )
  else return null
};

export default FeedPhotos;
