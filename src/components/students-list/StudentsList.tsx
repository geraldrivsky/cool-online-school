import { FC } from 'react';
import styles from './StudentsList.module.scss';

type IStudent = {
  fullName: string;
  studyPeriodBeginning: string;
  studyPeriodEnd: string;
  group: number;
  id: number;
};

type Props = {
  students: IStudent[];
};

const StudentsList: FC<Props> = ({ students }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.header}>
          <td className={styles.fullNameTitle}>ФИО ученика</td>
          <td>Начало периода</td>
          <td>Конец периода</td>
          <td>Группа</td>
        </tr>
      </thead>
      <tbody>
        {students.map(
          ({ fullName, studyPeriodBeginning, studyPeriodEnd, group, id }) => (
            <tr key={id} className={styles.student}>
              <td className={styles.fullName}>{fullName}</td>
              <td>{studyPeriodBeginning}</td>
              <td>{studyPeriodEnd}</td>
              <td>{group}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default StudentsList;
