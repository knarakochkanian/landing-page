import styles from './steps.module.scss'
import Step from "../common/step/step";
import arrowLeft from '../../public/assets/svg/stepArrowLeft.svg'
import arrowRight from '../../public/assets/svg/stepArrowRight.svg'

export default function Steps() {

    return (
        <section className={styles.stepsSection}>
            <h2>Steps</h2>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsRightWrapper}>
                    <Step
                        name={'Step 1'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={true}
                    />
                </div>
                <div className={styles.stepsLineWrapper}>
                    <span className={styles.stepsLine}></span>
                </div>

                <div className={styles.stepsLeftWrapper}>
                    <Step
                        name={'Step 2'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={false}
                    />
                </div>
            </div>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsRightWrapper}>
                    <Step
                        name={'Step 1'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={true}
                    />
                </div>
                <div className={styles.stepsLineWrapper}>
                    <span className={styles.stepsLine}></span>
                </div>

                <div className={styles.stepsLeftWrapper}>
                    <Step
                        name={'Step 2'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={false}
                    />
                </div>
            </div>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsRightWrapper}>
                    <Step
                        name={'Step 1'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={true}
                    />
                </div>
                <div className={styles.stepsLineWrapper}>
                    <span className={styles.stepsLine}></span>
                </div>

                <div className={styles.stepsLeftWrapper}>
                    <Step
                        name={'Step 2'}
                        title={'Introduction to Front-End'}
                        description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                        left={false}
                    />
                </div>
            </div>
        </section>
)
}
