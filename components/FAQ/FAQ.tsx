import styles from './FAQ.module.scss';
import Image from "next/image";
import question from "../../public/assets/svg/Question.svg";

export default function FAQ() {
    return (
        <section className={styles.FAGSection}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.FAGInfo}>
                <div>
                    <p>
                        Do you have any kind of questions? We are here to help.
                    </p>
                    <Image src={question} alt={'question'} width={344} height={405}/>
                </div>
                <div>
                    <button className={styles.FAGcollapse}>
                        <h4>What is the price?</h4>
                    </button>
                        <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                            This Career Path will teach you not only the necessary languages and technologies, but how to
                            think like a front-end engineer, too.</p>
                </div>
            </div>
        </section>
    )
}