import React from "react"
import { Row } from "react-bootstrap"
import styles from "./line.module.css"

export default function BorderLeft({children}) {

    return (
            <div className={styles.borderleft}>
                {children}
            </div>
    )
}