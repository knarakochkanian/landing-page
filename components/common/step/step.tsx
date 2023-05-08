import styles from './step.module.scss'
interface Step{
    name:string,
    title: string,
    description: string,
}

const step:Step[]= [
    {   name: "Step 1",
        title: "Introduction to Front-End ",
        description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
]

const Step = ({title, name, description}: Step) => {
    return (
        <div className={styles.stepBorder}>
            <div className={styles.step}>
                <h4 className={styles.stepName}> {name}</h4>
                <h3 className={styles.stepTitle}>
                    {title}
                </h3>
                <p className={styles.stepDescription}>{description}</p>
            </div>
        </div>
    )
}
export default Step