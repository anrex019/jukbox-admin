'use client';

import { useState } from 'react';
import styles from './AlbumsTable.module.scss';
import Image from 'next/image';
import AddAlbumModal from '../Addalbum/AddAlbumModal';
import EditArtistModal from '../Edit/EditArtistModal';

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

const initialData: Artist[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: 'Brooklyn Simmons',
  bio: 'Lorem ipsum dolor sit amet...',
  date: '24 Oct, 2023',
  status: 'Active',
  albums: [],
}));

const ArtistTable = () => {
  const [artists, setArtists] = useState<Artist[]>(initialData);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [showAddAlbumModal, setShowAddAlbumModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDotsClick = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id: number) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id));
    setConfirmDeleteId(null);
    setActiveDropdown(null);
  };

  const handleOpenAddAlbum = (artist: Artist) => {
    setActiveDropdown(null); // dropdown დახურე
    setSelectedArtist(artist);
    setShowAddAlbumModal(true);
  };

  const handleOpenEdit = (artist: Artist) => {
    setActiveDropdown(null); // dropdown დახურე
    setSelectedArtist(artist);
    setShowEditModal(true);
  };

  const handleAddAlbum = (artistId: number, album: Album) => {
    setArtists((prev) =>
      prev.map((artist) =>
        artist.id === artistId
          ? { ...artist, albums: [...(artist.albums || []), album] }
          : artist
      )
    );
    setShowAddAlbumModal(false);
    setSelectedArtist(null);
  };

  const handleCloseModals = () => {
    setShowAddAlbumModal(false);
    setShowEditModal(false);
    setSelectedArtist(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Artist Name</div>
        <div>Artist Biography</div>
        <div>Date</div>
        <div>Status Order</div>
      </div>

      <div className={styles.body}>
        {artists.map((artist) => (
          <div key={artist.id} className={styles.row}>
            <div className={`${styles.cell} ${styles.artistCell}`}>
              <div className={styles.avatar} />
              <span>{artist.name}</span>
            </div>
            <div className={`${styles.cell} ${styles.infoCell}`}>{artist.bio}</div>
            <div className={`${styles.cell} ${styles.infoCell}`}>{artist.date}</div>
            <div className={styles.cell} style={{ position: 'relative' }}>
              <span className={styles.activeBadge}>{artist.status}</span>
              <Image
                src="/icon/dots.svg"
                alt="Options"
                width={16}
                height={16}
                className={styles.dotsIcon}
                onClick={() => handleDotsClick(artist.id)}
              />
              {activeDropdown === artist.id && (
                <div className={styles.dropdown}>
                  <div onClick={() => handleOpenAddAlbum(artist)}>
                    <Image src="/icon/add-album.svg" alt="Add" width={16} height={16} />
                    <span>Add Album</span>
                  </div>
                  <div onClick={() => handleOpenEdit(artist)}>
                    <Image src="/icon/edit.svg" alt="Edit" width={16} height={16} />
                    <span>Edit</span>
                  </div>
                  <div onClick={() => setConfirmDeleteId(artist.id)}>
                    <Image src="/icon/delete.svg" alt="Delete" width={16} height={16} />
                    <span>Delete</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Delete Modal */}
      {confirmDeleteId !== null && (
        <div className={styles.modalOverlay} onClick={() => setConfirmDeleteId(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <div className={styles.warningBackground}>
                <Image src="/icon/warning.svg" alt="Warning" width={40} height={40} />
              </div>
            </div>
            <p className={styles.modalText}>Are you sure you want to delete this artist?</p>
            <div className={styles.modalButtons}>
              <button className={styles.yesBtn} onClick={() => handleDelete(confirmDeleteId)}>
                Yes
              </button>
              <button className={styles.noBtn} onClick={() => setConfirmDeleteId(null)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Album Modal */}
      {showAddAlbumModal && selectedArtist && (
        <AddAlbumModal
          artist={selectedArtist}
          onClose={handleCloseModals}
          onAddAlbum={handleAddAlbum}
        />
      )}

      {/* Edit Artist Modal */}
      {showEditModal && selectedArtist && (
        <EditArtistModal
          onClose={handleCloseModals}
          initialName={selectedArtist.name}
          initialBio={selectedArtist.bio}
        />
      )}
    </div>
  );
};

export default ArtistTable;