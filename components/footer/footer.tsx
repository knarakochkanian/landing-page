import styles from './footer.module.scss'
import Image from "next/image";
import facebook from '../../public/assets/svg/facebook.svg'
import gitlab from '../../public/assets/svg/gitlab.svg'
import twitter from '../../public/assets/svg/twitter.svg'
import linkin from '../../public/assets/svg/linkedin.svg'

export default function Footer() {
    return (
        <footer className={`${'container'} ${styles.footer} `}>
            <div className={styles.logo}>
                <Image src="/assets/svg/logo.svg" alt={"logo"} width={169} height={100}/>
                Wisconsin Ave, Suite 700
                Chevy Chase, Maryland 20815
            </div>
            <div className={styles.companies}>
                <h4>Company</h4>
                <div className={styles.companiesLinks}>
                    <div>
                        <pre>
                             <a href='#'>About Us</a>
                        </pre>
                        <pre>
                             <a href='#'>Steps</a>
                        </pre>
                        <pre>
                             <a href='#'>FAQs</a>
                        </pre>
                    </div>
                    <div>
                        <pre>
                            <a href='#'>Review</a>
                        </pre>
                     <pre>
                        <a href='#'>Gallery</a>
                     </pre>
                    </div>
                </div>
            </div>
            <div className={styles.social}>
                <h4>Social media</h4>
                <div>
                    <a href='#'><Image src={facebook} alt={facebook} width={12} height={22}/></a>
                    <a href='#'><Image src={gitlab} alt={gitlab} width={23} height={20}/></a>
                    <a href='#'><Image src={twitter} alt={twitter} width={23} height={18}/></a>
                    <a href='#'><Image src={linkin} alt={linkin} width={23} height={22}/></a>
                </div>

            </div>

        </footer>
    )
}
