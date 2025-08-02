import React from 'react';
import playlists from '../data/playlists.json';

interface Playlist {
  id: number;
  title: string;
  url: string;
}

const PlaylistSection: React.FC = () => {
  const data: Playlist[] = playlists;

  return (
    <section id="playlists" className="section">
      <h2>YouTube Playlists</h2>
      <ul className="card-grid playlists">
        {data.map((playlist) => (
          <li key={playlist.id} className="card">
            <a href={playlist.url} target="_blank" rel="noopener noreferrer">
              {playlist.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlaylistSection;