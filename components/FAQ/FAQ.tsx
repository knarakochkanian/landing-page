import styles from './FAQ.module.scss';
import Image from "next/image";
import question from "../../public/assets/svg/Question.svg";
import Accordion from "../common/accordion/Accordion";

    interface FAQS {
    id: number,
    title: string,
    content: string
}

const faqs: FAQS[] = [
    {
        id: 1,
        title: "What is the price?",
        content: `Lorem Ipsum is simply dummy content of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy content ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        title: "What is the price?",
        content: `Front-end engineers work closely with designers to make websites beautiful, functional, and fast.This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`
    },
    {
        id: 3,
        title: "What is the price?",
        content: `Contrary to popular belief, Lorem Ipsum is not simply random content. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        title: "What is the price?",
        content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
];

export default function FAQ() {

    return (
        <section className={styles.FAGSection}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.FAGInfo}>
                <div>
                    <p className={styles.FAGInfoDescription}>
                        Do you have any kind of questions?
                    </p>
                    <p className={styles.FAGInfoDescription}>
                        We are here to help.
                    </p>
                    <Image src={question} alt={'question'} width={344} height={405}/>
                </div>
                <div className={styles.FAGCollapseBox}>
                    <div className={styles.FAGCollapse}>
                        {faqs.map((faq, index) => {
                        return (
                            <>
                                <div key={index} className={styles.FAGCollapseWrapper}>
                                   <Accordion title={faq.title} content={faq.content}></Accordion>
                                </div>
                            </>
                        )
                    })
                    }
                    </div>
                </div>

            </div>
        </section>
    )
}