import Movieitem from '../MovieItem'

const MovieSlider = props => {
  const {item} = props
  const {id, thumbnailUrl, categoryId, videoUrl} = item
  console.log(categoryId)

  return (
    <div>
      <Movieitem
        key={id}
        categoryId={categoryId}
        videoUrl={videoUrl}
        thumbnailUrl={thumbnailUrl}
      />
    </div>
  )
}
export default MovieSlider
