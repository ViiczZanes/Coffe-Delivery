import React from 'react';
import styles from './emblem.module.css';
import Image from 'next/image'

interface EmblemProps {
  text: string;
  icon: string;
  color: string;
}

const Emblem: React.FC<EmblemProps> = ({ text, icon, color }) => {
  return (
    <div className={styles.emblem}>
      <div className={styles.image} style={{background: color}} >
        <Image className={styles.icon} src={icon} alt={text}/>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Emblem;
