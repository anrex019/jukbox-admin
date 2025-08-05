'use client';

import styles from './Header.module.scss';
import Image from 'next/image';
import { icons } from '../../icon';
import { usePage } from '../../context/PageContext';
import { useState } from 'react';
import AddPlaylistModal from '../AddPlaylistModal/AddPlaylist';

const Header = () => {
  const { selectedPage } = usePage();
  const [showAddModal, setShowAddModal] = useState(false);

  const getButtonText = () => {
    switch (selectedPage) {
      case 'artistsAlbum':
        return 'Add new artist';
      case 'albums':
        return 'Add new song';
      case 'user':
        return 'Add new user';
      case 'playlist':
        return 'Add new playlist';
      default:
        return 'd';
    }
  };



  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src={icons.logo} alt="Logo" width={40} height={40} />
          <span className={styles.appName}>Music App</span>
        </div>

        <div className={styles.searchWrapper}>
          <Image src={icons.search} alt="Search" width={24} height={24} />
          <input type="text" placeholder="Search" />
        </div>

        <button className={styles.addButton} onClick={() => setShowAddModal(true)}>
          <Image src={icons.vector} alt="Add" width={14} height={14} />
          <span>{getButtonText()}</span>
        </button>
      </header>

      {selectedPage === 'playlist' && showAddModal && (
        <AddPlaylistModal onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
};

export default Header;