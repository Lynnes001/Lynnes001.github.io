import React from "react"
import MyContainer from "../components/container"
import styles from "../styles/intro.module.css"

export default function Intro() {
    return (
        <MyContainer>

            <div className={styles.intro}>
                Song Yang He received his M.S. degree from the Department of Electrical and
                Computer Engineering, Rutgers University, and his B.E. degree from the School of Information and
                Software Engineering, the University of Electronic Science and Technology of China (UESTC). His current
                research interests include mobile sensing and cyber security/privacy.
            </div>
            
        </MyContainer>


    )


}