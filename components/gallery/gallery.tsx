import styles from "./gallery.module.scss"
import Image from "next/image";
import dev1 from '../../public/assets/leading/developer1.png'
import dev2 from '../../public/assets/leading/developer2.png'
import dev3 from '../../public/assets/leading/developer3.png'
import dev4 from '../../public/assets/leading/developer4.png'


export default function Gallery(){
    return (
        <section className='container'>
            <h2 className={styles.galleryTitle}>
                Gallery
            </h2>
            <div className={styles.galleryWrapper}>
                <div className={styles.div1}>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </div>
                <Image className={styles.div2} src={dev1} alt={`dev1`} width={650} height={434}/>
                <Image className={styles.div3} src={dev2} alt={`dev2`} width={314} height={209}/>
                <Image className={styles.div4} src={dev3} alt={`dev3`} width={314} height={206}/>
                <Image  className={styles.div5} src={dev4} alt={`dev4`} width={288  } height={434}/>
                <div  className={styles.div6}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</div>
            </div>
        </section>
    )
}

