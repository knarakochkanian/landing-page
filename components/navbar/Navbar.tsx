import Image from "next/image";
import styles from './navbar.module.scss'
export default function Navbar(){
    return (
        <header className ="container">
            <nav className={styles.navbar}>
                <Image src="/assets/svg/logo.svg" alt={"logo"} width={169} height={100}/>
                <div className= {styles.navbarButtons}>
                    <button className={styles.baseButton}>
                        About
                    </button>
                    <button className={styles.baseButton}>
                        Programs
                    </button >
                    <button className={styles.baseButton}>
                        Steps
                    </button>
                    <button className={styles.baseButton}>
                        Questions
                    </button>
                    <button className={styles.baseButton}>
                        Get in touch
                    </button>
                </div>
            </nav>

        </header>
    )
}
