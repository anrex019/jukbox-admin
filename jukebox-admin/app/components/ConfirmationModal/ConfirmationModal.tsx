'use client';

import styles from './ConfirmModal.module.scss';
import Image from 'next/image';

type Props = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmationModal = ({ message, onConfirm, onCancel }: Props) => {
    return (
        <div className={styles.confirmOverlay}>
            <div className={styles.confirmModal}>
            <div className={styles.warningBackground}>
            <Image
              src="/icon/warning.svg" 
              alt="Warning"
              width={16}
              height={16}
              className={styles.warning}
            />
          </div>
             

                <p className={styles.message}>{message}</p>
                <div className={styles.buttons}>
                    <button className={styles.yesButton} onClick={onConfirm}>Yes</button>
                    <button className={styles.noButton} onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;