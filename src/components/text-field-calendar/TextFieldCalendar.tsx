import { FC } from 'react';
import CustomCalendar from '@components/calendar/CustomCalendar';
import styles from './TextFieldCalendar.module.scss';

const TextFieldCalendar: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <input className={styles.input} type={'text'} />
      <CustomCalendar />
    </div>
  );
};

export default TextFieldCalendar;
