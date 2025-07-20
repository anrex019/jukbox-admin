'use client';

import { useState } from 'react';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { icons } from '../../icon';

const navItems = [
  { id: 'playlist', label: 'Playlist', icon: icons.playlist },
  { id: 'artistsAlbum', label: 'Artists Album', icon: icons.artistsAlbum },
  { id: 'albums', label: 'Albums', icon: icons.albums },
  { id: 'user', label: 'User', icon: icons.user },
];

type SidebarProps = {
  onSelect: (id: string) => void;
};

const Sidebar = ({ onSelect }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string>('artistsAlbum');

  const handleClick = (id: string) => {
    setActiveItem(id);
    onSelect(id); 
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeItem === item.id ? styles.active : ''}
              onClick={() => handleClick(item.id)}
            >
              <Image
                className={styles.icon}
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;