import styles from './step.module.scss'
import Image from "next/image";
import leftImg from '../../../public/assets/svg/StepLeft.svg'
import right from "../../../public/assets/svg/StepRight.svg"


interface Step {
    name: string,
    title: string,
    description: string,
    left: boolean
}

const step: Step[] = [
    {
        name: "Step 1",
        title: "Introduction to Front-End ",
        description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
        left: true
    },
]

const Step = ({title, name, description, left}: Step) => {

    return (
        <div className={styles.stepsBorderWrapper}>
            {left ? <Image src={leftImg} alt={"left"} width={146} height={228} className={styles.stepRight}/>  : <Image src={right} alt={"rigth"} width={146} height={228} className={styles.stepLeft}/> }
            <div className={styles.stepBorder}>
                <div className={styles.step}>
                    <h4 className={styles.stepName}> {name}</h4>
                    <h3 className={styles.stepTitle}>
                        {title}
                    </h3>
                    <p className={styles.stepDescription}>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Step