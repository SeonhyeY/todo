import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <div class='flex items-center gap-2'>
        <div class='size-4'>
          <svg
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        <h1 className={styles.h1}>Tasks</h1>
      </div>
      <button className={styles.button} onClick={toggleDarkMode}>
        {darkMode && <IoIosMoon />}
        {!darkMode && <IoIosSunny />}
      </button>
    </header>
  );
}
