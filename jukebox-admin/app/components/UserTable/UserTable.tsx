'use client';

import { useState } from 'react';
import styles from './UserTable.module.scss';
import Image from 'next/image';
import EditArtistModal from '../Edit/EditArtistModal';  
type Artist = {
  id: number;
  name: string;
  CreatedBy: string;
  date: string;
  status: string;
};

const initialData: Artist[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: 'Brooklyn Simmons',
  CreatedBy: 'jackson.graham@example.com',
  date: '24 Oct, 2023',
  status: 'Active',
}));

const ArtistTable = () => {
  const [artists, setArtists] = useState<Artist[]>(initialData);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null); // ✅
  const [showEditModal, setShowEditModal] = useState(false); // ✅

  const handleDotsClick = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id: number) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id));
    setConfirmDeleteId(null);
    setActiveDropdown(null);
  };

  const handleOpenEdit = (artist: Artist) => {
    setSelectedArtist(artist);
    setShowEditModal(true);
    setActiveDropdown(null);
  };

  const handleCloseModals = () => {
    setSelectedArtist(null);
    setShowEditModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Playlist Name</div>
        <div>Created By</div>
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

            <div className={`${styles.cell} ${styles.infoCell}`}>
              {artist.CreatedBy}
            </div>

            <div className={`${styles.cell} ${styles.infoCell}`}>
              {artist.date}
            </div>

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

      {confirmDeleteId !== null && (
        <div className={styles.modalOverlay} onClick={() => setConfirmDeleteId(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <div className={styles.warningBackground}>
                <Image src="/icon/warning.svg" alt="Warning" width={40} height={40} />
              </div>
            </div>
            <p className={styles.modalText}>
              Are you sure you want to delete this artist?
            </p>
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

      {showEditModal && selectedArtist && (
        <EditArtistModal
          onClose={handleCloseModals}
          initialName={selectedArtist.name}
          initialBio={selectedArtist.CreatedBy} 
        />
      )}
    </div>
  );
};

export default ArtistTable;