import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ filters, filter, onFilterChange }) {
  return (
    <div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li className={styles.filter} key={index}>
            <button
              className={`${styles.button} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
