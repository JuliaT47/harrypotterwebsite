import styles from "./App.module.css";

const MainPage = () => {
    return (
        <>
        <div className={styles.background}>
            <h1 className={styles.header}>WELCOME TO THE HARRY POTTER WORLD</h1>
            <button className={styles.showCharactersBtn}>Show all characters</button>
            <div className={styles.charactersPopUp}>
            {/* <img src="./images/students.png" alt="Students"/> */}
            <div id="div1" className={styles.d1}></div>
            <button>Hogwarts' students</button>
            {/* <img src="tutors.png" alt="Tutors"/> */}
            <div id="div2" className={styles.d2}></div>
            <button>Hogwarts' tutors</button>
            {/* <img src=""alt="Characters"/> */}
            <button>Characters from each house</button>
        </div>
        </div>
        </>
    )
}

export default MainPage