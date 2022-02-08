import { useEffect } from 'react';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';

import styles from './styles.module.css'

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
};

export default FeedPhotos;
