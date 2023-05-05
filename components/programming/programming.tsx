import styles from './programming.module.scss'
import Programs from "../common/programs/programs";

export default function Programming() {
    return (
        <section className={styles.programmingSection}>
            <h2>
                Programming technologies
            </h2>
            <p className={styles.programmingDescription}> By the end, you’ll have the portfolio and interview skills you
                need to start your new career.</p>
            <Programs/>
        </section>
    )
}