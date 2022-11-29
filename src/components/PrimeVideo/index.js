import {Component} from 'react'
import Slider from 'react-slick'
import MovieSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class PrimeVideo extends Component {
  state = {}

  render() {
    const {moviesList} = this.props
    console.log(moviesList)
    const setting = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <div className="maincontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="slider">
          <h1>Comedy Movies</h1>

          <Slider {...setting}>
            {moviesList.map(object =>
              object.categoryId === 'COMEDY' ? (
                <MovieSlider key={object.id} item={object} />
              ) : null,
            )}
          </Slider>
        </div>
        <div className="slider">
          <h1>Action Movies</h1>
          <Slider {...setting}>
            {moviesList.map(object =>
              object.categoryId === 'ACTION' ? (
                <MovieSlider key={object.id} item={object} />
              ) : null,
            )}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
