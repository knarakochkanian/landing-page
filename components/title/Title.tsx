import styles from './title.module.scss';

export default function Title() {
    return (
        <section className={styles.titleSection}>
            <div className={styles.titleImg}>
                <div className={styles.title}>
                    <h1 className={styles.title}>
                        Front-End
                    </h1>
                    <p className={styles.description}>
                        Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                    </p>
                </div>
                <div className={styles.title}>
                    <button className={styles.button}>
                        Start my career change
                    </button>
                    <h1>
                        Developer
                    </h1>
                </div>
            </div>
        </section>
    )
}