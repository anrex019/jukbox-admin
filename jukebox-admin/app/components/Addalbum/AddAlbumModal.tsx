'use client';

import { useState } from 'react';

type Album = {
  title: string;
  releaseDate: string;
};

type Artist = {
  id: number;
  name: string;
  bio: string;
  date: string;
  status: string;
  albums?: Album[];
};

type AddAlbumModalProps = {
  artist: Artist;
  onClose: () => void;
  onAddAlbum: (artistId: number, album: Album) => void;
};

export default function AddAlbumModal({
  artist,
  onClose,
  onAddAlbum,
}: AddAlbumModalProps) {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = () => {
    if (title && releaseDate) {
      onAddAlbum(artist.id, { title, releaseDate });
      onClose();
    }
  };

  return (
    <div style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
      <h3>Add Album for {artist.name}</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
        style={{ display: 'block', marginBottom: 12 }}
      />
      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        style={{ display: 'block', marginBottom: 12 }}
      />
      <button onClick={handleSubmit}>Add Album</button>
      <button onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
    </div>
  );
}