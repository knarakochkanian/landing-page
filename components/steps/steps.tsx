import styles from './steps.module.scss'
import Step from "../common/step/step";
import Image from "next/image";
import left from '../../public/assets/svg/StepLeft.svg'
import right from '../../public/assets/svg/StepRight.svg'
import arrowLeft from '../../public/assets/svg/stepArrowLeft.svg'
import arrowRight from '../../public/assets/svg/stepArrowRight.svg'

export default function Steps() {

    return (
        <section className={styles.stepsSection}>
            <h2>Steps</h2>
            <span className={styles.stepsLine}></span>
            <Image src={arrowRight} alt={arrowRight} width={104} height={24} className={arrowRight}/>
            <div className={styles.stepsBorderWrapper}>
                <Image src={left} alt={'left'} width={146} height={228} className={styles.stepsRight}/>
                <Step
                    name={'Step 1'}
                    title={'Introduction to Front-End'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
            <div className={styles.stepsBorderWrapper}>
                <Image src={right} alt={'left'} width={146} height={228} className={styles.stepsLeft}/>
                <Step
                    name={'Step 2'}
                    title={'Overview of Development'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
            <div className={styles.stepsBorderWrapper}>
                <Image src={left} alt={'left'} width={146} height={228} className={styles.stepsRight}/>
                <Step
                    name={'Step 3'}
                    title={'Introduction to Front-End'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
            <div className={styles.stepsBorderWrapper}>
                <Image src={right} alt={'left'} width={146} height={228} className={styles.stepsLeft}/>
                <Step
                    name={'Step 4'}
                    title={'Overview of Development'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
            <div className={styles.stepsBorderWrapper}>
                <Image src={left} alt={'left'} width={146} height={228} className={styles.stepsRight}/>
                <Step
                    name={'Step 5'}
                    title={'Introduction to Front-End'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
            <div className={styles.stepsBorderWrapper}>
                <Image src={right} alt={'left'} width={146} height={228} className={styles.stepsLeft}/>
                <Step
                    name={'Step 6'}
                    title={'Overview of Development'}
                    description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '}
                />
            </div>
        </section>
    )
}
