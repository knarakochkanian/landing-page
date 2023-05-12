import styles from "./review.module.scss"


export default function SliderItem(){
    function toggleHandler(e) {
        e.preventDefault();
        (e.target.classList.contains(`${styles.active}`) === true) ? e.target.classList.remove(`${styles.active}`) : e.target.classList.add(`${styles.active}`);
    }

    return(
        <>
            <div onClick={toggleHandler} className={`${styles.sliderItem} ${styles.slide1}`} id={1}></div>
            <div onClick={toggleHandler} className={`${styles.sliderItem} ${styles.slide2}`} id={2}></div>
            <div onClick={toggleHandler} className={`${styles.sliderItem} ${styles.slide3}`} id={3}></div>
        </>

    )
}