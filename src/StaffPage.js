import styles from './App.module.css';

const StaffPage = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.cardsContainer}>
        <h1 className={styles.h1Cards}>Hogwarts' staff</h1>
        <div className={styles.cardsDiv1}>
          <div className={`${styles.mcGonagall} ${styles.card}`}>
            <h3>Minerva McGonagall</h3>
            <p>
              Professor
              <br /> Gryffindor
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.snape} ${styles.card}`}>
            <h3>Severus Snape</h3>
            <p>
              Half-Blood Princ
              <br /> Slytherin
              <br />
              09-01-1960
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.hagrid} ${styles.card}`}>
            <h3>Rubeus Hagrid</h3>
            <p>
              Dragomir Despard
              <br /> Gryffindor
              <br />
              06-12-1928
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.lupin} ${styles.card}`}>
            <h3>Remus Lupin</h3>
            <p>
              Professor Lupin, Moony
              <br /> Gryffindor
              <br />
              10-03-1960
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={styles.cardsDiv2}>
          <div className={`${styles.slughorn} ${styles.card}`}>
            <h3>Horace Slughorn</h3>
            <p>
              Professor
              <br /> Slytherin
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.umbridge} ${styles.card}`}>
            <h3>Dolores Umbridge</h3>
            <p>
              Professor
              <br /> Slytherin
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.filch} ${styles.card}`}>
            <h3>Argus Filch</h3>
            <p>
              Guard
              <br /> Gryffindor
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.dumbledore} ${styles.card}`}>
            <h3>Albus Dumbledore</h3>
            <p>
              Professor Dumbledor
              <br /> Gryffindor
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
