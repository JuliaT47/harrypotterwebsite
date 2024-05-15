import styles from './App.module.css';

const StudentsPage = () => {
  return (
    <>
      <div className={styles.backgroundStudents}>
        <h1 className={styles.h1Students}>HOGWARTS' STUDENTS</h1>
      </div>
      <div className={styles.studentsDiv}>
        <div className={styles.potter}>
          <h3>Harry Potter</h3>
          <p>The Boy Who Lived Gryffindor 31-07-1980</p>
          <p>More information</p>
          <button></button>
        </div>
        <div className={styles.granger}>
          <h3>Hermione Granger</h3>
        </div>
        <div className={styles.weasley}>
          <h3>Ron Weasley</h3>
        </div>
        <div className={styles.malfoy}>
          <h3>Draco Malfoy</h3>
        </div>
        <div className={styles.diggory}>
          <h3>Cedric Diggory</h3>
        </div>
        <div className={styles.chang}>
          <h3>Cho Chang</h3>
        </div>
        <div className={styles.longbottom}>
          <h3>Neville Longbottom</h3>
        </div>
        <div className={styles.lovegood}>
          <h3>Luna Lovegood</h3>
        </div>
      </div>
    </>
  );
};

export default StudentsPage;
