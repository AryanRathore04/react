import React from 'react'

const pixabey = () => {
  return (
    <>
      <div className="container">
        <h1>Image Gallery</h1>
        <div className="gallery">
          <div className="image">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5de530f6ea103f000653df8e/Henry-Cavill-in-Zack-Snyder-s--Man-Of-Steel-/960x0.jpg?format=jpg&width=960"
              alt=""
            />
            <h4>Superman</h4>
          </div>
          <div className="image">
            <img
              src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-ragnarok/2/23/Thor.jpg"
              alt=""
            />
            <h4>thor</h4>
          </div>

          <div className="image">
            <img
              src="https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg"
              alt=""
            />
            <h4>hulk</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default pixabey