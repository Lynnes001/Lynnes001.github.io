import React from "react"
import containerStyles from "./container.module.css"


export default function MyContainer({ children }) {
    return <div className={containerStyles.bordercontainer}>{children}</div>
}