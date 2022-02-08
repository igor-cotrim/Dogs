import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

import styles from './styles.module.css'

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Tem certexa que deseja deletar?')

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)

      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>Deletar</button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>Deletar</button>
      )}
    </>
  )
};

export default PhotoDelete;
