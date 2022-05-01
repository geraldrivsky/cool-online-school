import { FC } from 'react';
import { CardStudentOptions } from '@app/types/Props';
import styles from './CardStudentSlider.module.scss';

type Props = Required<Pick<CardStudentOptions, 'pointsNumber'>>;

const CardStudentSlider: FC<Props> = ({ pointsNumber }) => {
  const sliderProgress = `${pointsNumber * 20}%`;
  return (
    <div className={styles.slider}>
      <div style={{ width: sliderProgress }} className={styles.progress}></div>
      <div style={{ right: sliderProgress }} className={styles.icon}></div>
    </div>
  );
};

export default CardStudentSlider;