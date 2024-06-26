import { Link } from 'react-router-dom'
import { fetchPost } from '../../scripts/fetchPost'
import TimeInfo from '../TimeInfo'
import './Feature.css'

function Feature({ post_id }) {
  const { title, body, time_read, created_at:date, image_url } = fetchPost(post_id)
  const postLink = `/posts/${post_id}`

  return (
      <header className='feature'>
        <Link to={postLink}>
          <h1 className='feature__title'>{title}</h1>
        </Link>
        <p className='feature__fine-line'>Aqui você ficará bem informado com nosso blog super top</p>
        <Link to={postLink}>
          <div className='feature__img-container'>
            <img className='feature__img' src={image_url} alt='featured' />
          </div>
        </Link>
        <Link to={postLink}>
          <p className='prev cutted'>
            {body}
          </p>
        </Link>
        <TimeInfo _class={'feature__time_info'} time_read={time_read} date={date} />
      </header>
  )
}

export default Feature