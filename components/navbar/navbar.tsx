import Image from "next/image";
import styles from './navbar.module.scss'

interface Buttons{
    name: string,
}

const buttons:Buttons[] = [
    {name: "About"},
    {name: "Programs"},
    {name: "Steps"},
    {name: "Questions"},
    {name: "Get in touch"},
]
export default function Navbar(){
    return (
        <header className ="container">
            <nav className={styles.navbar}>
                <Image src="/assets/svg/logo.svg" alt={"logo"} width={169} height={100}/>
                <div className= {styles.navbarButtons}>
                    {buttons.map((button)=>{
                    return <div> {button.name}</div>
                    })}
                </div>
            </nav>

        </header>
    )
}
