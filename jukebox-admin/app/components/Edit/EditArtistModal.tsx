'use client';

import { useState } from 'react';
import styles from './EditArtistModal.module.scss';
import Image from 'next/image';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

type AlbumData = {
  title: string;
  releaseDate: string;
  musicname: string;
};

type Props = {
  onClose: () => void;
  onSave: (data: AlbumData) => void;
};

const EditAlbumModal = ({ onClose, onSave }: Props) => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [musicname, setMusicName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEdit, setShowEdit] = useState(true);

  const handleSave = () => {
    setShowEdit(false);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    const albumData = { title, releaseDate, musicname };
    console.log('Saved:', albumData);
    onSave(albumData); 
    setShowConfirmation(false);
    onClose();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setShowEdit(true);
  };

  return (
    <>
      {showEdit && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={onClose}>✕</button>

            <div className={styles.contentWrapper}>
              <div className={styles.left}>
                <label className={styles.label}>Edit Cover image</label>
                <div className={styles.imageBox}>
                  <Image 
                    src="/icon/placeholder.png" 
                    alt="Cover" 
                    width={240} 
                    height={240} 
                  />
                </div>
              </div>

              <div className={styles.right}>
                <label className={styles.label}>Album title</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className={styles.label}>Album release date</label>
                <input
                  className={styles.input}
                  type="date"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />

                <label className={styles.label}>Music Name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Music Name"
                  value={musicname}
                  onChange={(e) => setMusicName(e.target.value)}
                />

                <button className={styles.addButton} onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <ConfirmationModal
          message="Are you sure you want to add this information?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default EditAlbumModal;