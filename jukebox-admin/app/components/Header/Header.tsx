import styles from './Header.module.scss';
import Image from 'next/image';
import { icons } from '../../icon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src={icons.logo} alt="Logo" width={40} height={40} />
        <span className={styles.appName}>Music App</span>
      </div>

      <div className={styles.searchWrapper}>
        <Image src={icons.search} alt="Search" width={24} height={24} />
        <input type="text" placeholder="Search" />
      
      </div>

      <button className={styles.addButton}>
        <Image src={icons.vector} alt="Add" width={14} height={14} />
         <span className='add'>Add new artist</span>
      </button>
    </header>
  );
};

export default Header;