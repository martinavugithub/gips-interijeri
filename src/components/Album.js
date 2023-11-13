import React from 'react';

function Album({ album, openAlbum }) {
  return (
    <div className="album col-md-4 mb-4">
      <h3 onClick={() => openAlbum(album)}>{album.title}</h3>
      <div className="cover" onClick={() => openAlbum(album)}>
        <img className="img-fluid" src={album.coverImage} alt={album.title} />
      </div>
    </div>
  );
}

export default Album;


