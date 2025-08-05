'use client';

import { useState } from 'react';
import styles from './AddArtist.module.scss';
import Image from 'next/image';

type Props = {
  onClose: () => void;
};

const AddArtistModal = ({ onClose }: Props) => {
  const [playlistName, setPlaylistName] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = () => {
    setShowConfirm(true); 
  };

  const handleConfirm = () => {
    console.log('Saved:', playlistName);
    setShowConfirm(false);
    onClose(); 
  };

  return (
    <div className={styles.overlay}>
      {!showConfirm && (
        <div className={styles.modal}>
          <button className={styles.close} onClick={onClose}>✕</button>

          <div className={styles.contentWrapper}>
            <div className={styles.left}>
              <label className={styles.label}>Edit Cover image</label>
              <div className={styles.imageBox}>
                <Image 
                  src="/images/placeholder.png" 
                  alt="Cover" 
                  width={240} 
                  height={240} 
                />
              </div>
            </div>

            <div className={styles.right}>
              <label className={styles.label}>Playlist Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Playlist Name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />

              <button className={styles.saveButton} onClick={handleSave}>
                Save information
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className={styles.confirmModal}>
          <div className={styles.warningBackground}>
            <Image
              src="/icon/warning.svg"
              alt="Warning"
              width={32}
              height={32}
              className={styles.warning}
            />
          </div>
          <p>Are you sure you want to save this information?</p>
          <div className={styles.actions}>
            <button className={styles.confirmYes} onClick={handleConfirm}>Yes</button>
            <button className={styles.confirmNo} onClick={() => setShowConfirm(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddArtistModal;