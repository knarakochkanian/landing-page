import styles from './review.module.scss'
import {useState} from "react";
import SliderItem from "./sliderItem";

export default function Review() {

    return (
    <section className='container'>
            <h2 className={styles.reviewTitle}>
                Review
            </h2>


               <div className={styles.reviewInfo}>
                    <div className={styles.reviewText}>
                        <h4>
                            Best courses ever
                        </h4>
                        <p>
                            Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.
                        </p>
                    </div>
                    <div className={styles.reviewSlider}>
                        <div>
                            1/3
                        </div>
                        <div className={styles.slider}>
                            <SliderItem id={'id'}/>
                        </div>
                    </div>
                </div>
    </section>
    )
}