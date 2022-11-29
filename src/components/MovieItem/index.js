import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Movieitem = props => {
  const {videoUrl, categoryId, thumbnailUrl} = props

  return (
    <div id={categoryId} className="docontainer">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-container"
        position="bottom left"
      >
        {close => (
          <div className="cardcontainer">
            <button testid="closeButton" onClick={() => close()} type="button">
              <IoMdClose />
            </button>
            <ReactPlayer controls url={videoUrl} width="100%" height="100%" />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default Movieitem
