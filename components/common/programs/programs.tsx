import Image from "next/image";
import styles from './programs.module.scss'

interface Programs{
    path: string,
    title: string
}
const programs:Programs[] =     [
    {   path: "assets/leading/angular.png",
        title: "Angular"
    },
    {
        path: "assets/leading/react.png",
        title: "React"
    },
    {
        path: "assets/leading/vue.png",
        title: "Vue.js"
    },
    {
        path: "assets/leading/js.png",
        title: "JavaScript"
    }
]


export default function Programs() {
    return (
        <div className={styles.programs}>
            <div className='container'>
                {programs.map((program) => {
                    return <div className={styles.ImgBlock}><Image src={`/${program.path}`} alt={"img"} width={182} height={152} className={styles.image}/>
                        <h4>{program.title}</h4>
                    </div>

                })}
            </div>

        </div>
    )
}