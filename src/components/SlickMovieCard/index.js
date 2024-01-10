import {Link} from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const SlickMovieCard = props => {
  const {movieList} = props

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieList.map(eachMovie => (
          <Link to={`/movies/${eachMovie.id}`} key={eachMovie.id}>
            <img
              src={eachMovie.posterPath}
              alt={eachMovie.title}
              className="slick-movie-img"
            />
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default SlickMovieCard

// autoplay: true,
// autoplaySpeed: 2000,
// cssEase: 'linear',
// pauseOnHover: true,

// responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       infinite: true,
//       dots: true,
//     },
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       initialSlide: 1,
//     },
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//     },
//   },
// ],
