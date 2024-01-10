import {Link} from 'react-router-dom'

import './index.css'

const PopularVideoItems = props => {
  const {videosList} = props
  const {id, posterPath, title} = videosList

  return (
    <li className="popular-list-item">
      <Link to={`/movies/${id}`}>
        <img src={posterPath} alt={title} className="popular-img" />
      </Link>
    </li>
  )
}

export default PopularVideoItems
