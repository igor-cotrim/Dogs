import { useContext, useEffect, useRef, useState } from 'react';

import PhotoCommentsForm from '../PhotoCommentsForm';
import { UserContext } from '../../contexts/UserContext';

import styles from './styles.module.css'

const PhotoComments = ({ id, comments }) => {
  const [photoComments, setPhotoComments] = useState(() => comments);
  const commentsSection = useRef(null)
  const { login } = useContext<any>(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [photoComments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {photoComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setPhotoComments={setPhotoComments} />}
    </>
  )
};

export default PhotoComments;
