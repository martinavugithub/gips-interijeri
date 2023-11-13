// AlbumModal.js
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/AlbumModal.css';

function AlbumModal({ album, closeAlbum }) {
  const images = album.images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  const modalRoot = document.getElementById('modal-root');
  const modalContainer = document.createElement('div');

  React.useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(modalContainer);
    }

    return () => {
      if (modalRoot) {
        modalRoot.removeChild(modalContainer);
      }
    };
  }, [modalContainer, modalRoot]);

  const handleClose = () => {
    closeAlbum();
  };

  return ReactDOM.createPortal(
    <div className="album-modal">
      {modalRoot && (
        <div className="modal-overlay" onClick={closeAlbum}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>&times;</button>
            <Gallery
              items={images}
              showThumbnails={true}
              showFullscreenButton={false}
              showPlayButton={false}
              startIndex={0}
              onClose={closeAlbum}
            />
          </div>
        </div>
      )}
    </div>,
    modalContainer
  );
}

export default AlbumModal;
