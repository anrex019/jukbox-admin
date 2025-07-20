'use client';

import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/sideBar';
import ArtistTable from './components/ArtistTable/ArtistTable';

export default function HomePage() {
  const [selectedPage, setSelectedPage] = useState('artistsAlbum');

  return (
    <main>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex' }}>
          <Sidebar onSelect={(id) => setSelectedPage(id)} />
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {selectedPage === 'artistsAlbum' && <ArtistTable />}
            {selectedPage === 'playlist' && <div style={{ color: 'white' }}>Playlist Page Coming Soon</div>}
            {selectedPage === 'albums' && <div style={{ color: 'white' }}>Albums Page Coming Soon</div>}
            {selectedPage === 'user' && <div style={{ color: 'white' }}>User Page Coming Soon</div>}
          </div>
        </div>
      </div>
    </main>
  );
}