import classNames from 'classnames';
import { FC } from 'react';
import styles from './VerticalSlider.module.scss';

type Option = {
  text: string;
  id: number;
  isActive?: boolean;
};

type Props = { options: Option[] };

const VerticalSlider: FC<Props> = ({ options }) => {
  return (
    <div className={styles.container}>
      {options.map(({ text, id, isActive = false }) => (
        <div
          key={id}
          className={classNames(styles.option, { [styles.active]: isActive })}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
