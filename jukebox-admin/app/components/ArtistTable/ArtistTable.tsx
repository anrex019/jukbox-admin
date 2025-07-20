'use client';

import { useState } from 'react';
import styles from './ArtistTable.module.scss';
import Image from 'next/image';

type Artist = {
  id: number;
  name: string;
  bio: string;
  date: string;
  status: string;
};

const initialData: Artist[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: 'Brooklyn Simmons',
  bio: 'Lorem ipsum dolor sit amet...',
  date: '24 Oct, 2023',
  status: 'Active',
}));

const ArtistTable = () => {
  const [artists, setArtists] = useState<Artist[]>(initialData);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const handleDotsClick = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id: number) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id));
    setConfirmDeleteId(null);
    setActiveDropdown(null);
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
                  <div onClick={() => console.log('Add Album')}>
                    <Image src="/icon/add-album.svg" alt="Add" width={16} height={16} />
                    <span>Add Album</span>
                  </div>
                  <div onClick={() => console.log('Edit')}>
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
    </div>
  );
};

export default ArtistTable;