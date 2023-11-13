import React, { useState } from 'react';
import AlbumModal from './AlbumModal';
import Album from './Album';
import '../styles/Portfolio.css';

function Portfolio() {
  const albums = [
    {
      title: 'Spušteni stropovi i skrivena rasvjeta',
      coverImage: '/images/spusteni-stropovi/8.jpg',
      images: [
        '/images/spusteni-stropovi/1.jpg',
        '/images/spusteni-stropovi/2.jpg',
        '/images/spusteni-stropovi/3.jpg',
        '/images/spusteni-stropovi/4.jpg',
        '/images/spusteni-stropovi/5.jpg',
        '/images/spusteni-stropovi/6.jpg',
        '/images/spusteni-stropovi/7.jpg',
        '/images/spusteni-stropovi/8.jpg',
        '/images/spusteni-stropovi/9.jpg',
        '/images/spusteni-stropovi/10.jpg',
      ],
    },
    {
      title: 'Oblaganje kamina',
      coverImage: '/images/oblaganje-kamina/5.jpg',
      images: [
        '/images/oblaganje-kamina/1.jpg',
        '/images/oblaganje-kamina/2.jpg',
        '/images/oblaganje-kamina/3.jpg',
        '/images/oblaganje-kamina/4.jpg',
        '/images/oblaganje-kamina/5.jpg',
      ],
    },
    {
      title: 'Uređenje potkrovlja',
      coverImage: '/images/uredenje-potkrovlja/9.jpg',
      images: [
        '/images/uredenje-potkrovlja/1.jpg',
        '/images/uredenje-potkrovlja/2.jpg',
        '/images/uredenje-potkrovlja/3.jpg',
        '/images/uredenje-potkrovlja/4.jpg',
        '/images/uredenje-potkrovlja/5.jpg',
        '/images/uredenje-potkrovlja/6.jpg',
        '/images/uredenje-potkrovlja/7.jpg',
        '/images/uredenje-potkrovlja/8.jpg',
        '/images/uredenje-potkrovlja/9.jpg',
        '/images/uredenje-potkrovlja/10.jpg',
        '/images/uredenje-potkrovlja/11.jpg',
        '/images/uredenje-potkrovlja/12.jpg',
      ],
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  return (
    <div id="portfolio" className="portfolio">
        <div className="col-md-12">
            <h2 className="mt-5 mb-4">Portfolio</h2>
        </div>
        <div className="row-album">
            {albums.map((album, index) => (
            <div key={index} className="col-md-4 mb-4">
                <Album album={album} openAlbum={openAlbum} />
            </div>
            ))}
        </div>
        {selectedAlbum && (
            <AlbumModal album={selectedAlbum} closeAlbum={closeAlbum} />
        )}
    </div>

  
  );
}

export default Portfolio;