import styles from "./App.module.css";

const MainPage = () => {
    return (
        <>
        <div className={styles.background}>
            <h1 className={styles.header}>WELCOME TO THE HARRY POTTER WORLD</h1>
            <button className={styles.showCharactersBtn}>Show all characters</button>
            <div className={styles.charactersPopUp}>
            <img src="./images/students.png" alt="Students"/>
            <button>Hogwarts' students</button>
            <img src="./images/tutors.png" alt="Tutors"/>
            <button>Hogwarts' tutors</button>
            <img src=""alt="Characters"/>
            <button>Characters from each house</button>
        </div>
        </div>
        </>
    )
}

export default MainPage