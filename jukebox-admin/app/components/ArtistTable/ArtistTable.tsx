'use client';

import { useState } from 'react';
import styles from './ArtistTable.module.scss';
import Image from 'next/image';
import { icons } from '../../icon';

const mockData = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: 'Brooklyn Simmons',
    bio: 'Lorem ipsum dolor sit amet...',
    date: '24 Oct, 2023',
    status: 'Active',
}));

const ArtistTable = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const handleDotsClick = (id: number) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    };

    const handleOptionClick = (action: string, id: number) => {
        console.log(`${action} clicked for artist id: ${id}`);
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
                {mockData.map((artist) => (
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
                                    <div onClick={() => handleOptionClick('Add Album', artist.id)}>
                                        <Image
                                            src="/icon/add-album.svg"
                                            alt="Options"
                                            width={16}
                                            height={16}
                                            className={styles.dotsIcon}
                                            onClick={() => handleDotsClick(artist.id)}
                                        />
                                        <span>Add Album</span>
                                    </div>
                                    <div onClick={() => handleOptionClick('Edit', artist.id)}>
                                    <Image
                                            src="/icon/edit.svg"
                                            alt="Options"
                                            width={16}
                                            height={16}
                                            className={styles.dotsIcon}
                                            onClick={() => handleDotsClick(artist.id)}
                                        />
                                        <span>Edit</span>
                                    </div>
                                    <div onClick={() => handleOptionClick('Delete', artist.id)}>
                                    <Image
                                            src="/icon/delete.svg"
                                            alt="Options"
                                            width={16}
                                            height={16}
                                            className={styles.dotsIcon}
                                            onClick={() => handleDotsClick(artist.id)}
                                        />
                                        <span>Delete</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistTable;