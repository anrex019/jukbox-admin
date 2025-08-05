'use client';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/sideBar';
import ArtistTable from './components/ArtistTable/ArtistTable';
import AlbumsTable from './components/AlbumsTable/AlbumsTable';
import UserTable from './components/UserTable/UserTable';
import PlayList from './components/PlayList/PlayList';
import { PageProvider, usePage } from './context/PageContext';
import { JSX } from 'react';

const Content = () => {
  const { selectedPage } = usePage();

  const pages: { [key: string]: JSX.Element } = {
    artistsAlbum: <ArtistTable />,
    playlist: <PlayList />,
    albums: <AlbumsTable />,
    user: <UserTable />,
  };

  return pages[selectedPage] || null;
};

export default function HomePage() {
  return (
    <PageProvider>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            <Content />
          </div>
        </div>
      </div>
    </PageProvider>
  );
}