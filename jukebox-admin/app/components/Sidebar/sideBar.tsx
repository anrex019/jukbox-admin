import { useState } from 'react';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { usePage } from '../../context/PageContext';

const navItems = [
  { id: 'playlist', label: 'Playlist', icon: 'playlist' },
  { id: 'artistsAlbum', label: 'Artists Album', icon: 'artists' },
  { id: 'albums', label: 'Albums', icon: 'albums' },
  { id: 'user', label: 'User', icon: 'user' },
];

const Sidebar = () => {
  const { selectedPage, setSelectedPage } = usePage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedPage(id);
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => {
            const isActive = selectedPage === item.id;
            const isHovered = hoveredItem === item.id;
            const iconName = `/icon/${item.icon}${isActive || isHovered ? '-hover' : ''}.svg`;

            return (
              <li
                key={item.id}
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                onClick={() => handleClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  className={styles.icon}
                  src={iconName}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;