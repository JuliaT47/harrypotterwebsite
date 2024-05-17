import styles from './App.module.css';

const MainPage = () => {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.header}>WELCOME TO THE HARRY POTTER WORLD</h1>
        <button className={styles.showCharactersBtn}>
          Show all characters
        </button>
        <div className={styles.charactersPopUp}>
          <div className={styles.students}></div>
          <div className={styles.tutors}></div>
          <div className={styles.characters}></div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.popUpBtn}>Hogwarts' students</button>
          <button className={styles.popUpBtn}>Hogwarts' staff</button>
          <button className={styles.popUpBtn}>
            Characters from each house
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
