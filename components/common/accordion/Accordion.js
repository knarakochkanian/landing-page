import React, { useState } from 'react';
import styles from "../../FAQ/FAQ.module.scss"
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                {isActive && <p className={styles.accordionContent}>{content}</p>}
            </div>
        </div>
    );
};

export default Accordion;