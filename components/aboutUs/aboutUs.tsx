import styles from './about.module.scss'
import Image from "next/image";
import line from '../../public/assets/svg/line.svg';
import Mentor1 from '../../public/assets/leading/Mentor1.png';
import Mentor2 from '../../public/assets/leading/Mentor2.png';
import Mentor3 from '../../public/assets/leading/Mentor3.png';
import frontEnd from '../../public/assets/svg/Front-End.svg'
import ellipse from '../../public/assets/svg/Ellipse.svg'
export default function AboutUs() {
    return (
        <section className={styles.aboutSection}>
            <h2>About Us</h2>
            <div className={styles.aboutInfo}>
                <div>
                    <h3> Mentors</h3>
                    <Image width={394} height={157} src={line} alt={"Vector"} className={styles.aboutVector}/>
                    <div className={styles.aboutInfoText1}>
                        <Image width={188} height={188} src={Mentor1} alt={"Mentor1"}/>
                        <h4>Wade Warren</h4>
                        <p className={styles.aboutInfoDescription}>
                            Front-end engineers work closely with designers
                        </p>

                    </div>
                    <div className={styles.aboutInfoText2}>
                        <Image width={188} height={188} src={Mentor2} alt={"Mentor2"}/>
                        <h4>Kristin Watson</h4>
                        <p className={styles.aboutInfoDescription}>
                            Front-end engineers work closely with designers
                        </p>
                    </div>
                    <div className={styles.aboutInfoText3}>
                        <Image width={188} height={188} src={Mentor3} alt={"Mentor3"}/>
                        <h4>Robert Fox</h4>
                        <p className={styles.aboutInfoDescription}>
                            Front-end engineers work closely with designers
                        </p>
                    </div>

                </div>
                <div className={styles.aboutDescription}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                    This Career Path will teach you not only the necessary languages and technologies, but how to think
                    like a front-end engineer, too.
                </div>
            </div>
            <Image src={frontEnd} alt={'front-end'} width={756} height={186} className={styles.aboutFront}/>
            <Image src={ellipse} alt={'ellipse'} width={398} height={388} className={styles.aboutEllipse}/>
        </section>
    )
}