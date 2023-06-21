'use client'

import { useState } from 'react';
import styles from './inputShop.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const InputShop = () => {
  const [value, setValue] = useState(1);

  function handleAddItem() {
    setValue(value + 1);
  }

  function handleRemoveItem() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className={styles.amount}>
      <button className={styles.btn} onClick={handleRemoveItem} disabled={value === 1}>
        <AiOutlineMinus />
      </button>
      <input className={styles.input} type="text" readOnly value={value} />
      <button className={styles.btn} onClick={handleAddItem}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default InputShop;