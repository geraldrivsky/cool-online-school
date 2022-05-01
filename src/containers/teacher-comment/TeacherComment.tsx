import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { TeacherCommentProps } from '@app/types/Props';
import Button from '@components/button/Button';
import styles from './TeacherComment.module.scss';

const TeacherComment: FC<TeacherCommentProps> = ({ comment, commentDate }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Комментарий учителя к домашенму заданию на {commentDate}
      </p>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.buttons}>
        <Button
          colorTheme={ButtonColorThemes.red}
          text="Есть вопросы, обсудить на уроке"
        />
        <Button
          colorTheme={ButtonColorThemes.red}
          text="Спасибо, всё понятно"
        />
      </div>
    </div>
  );
};

export default TeacherComment;