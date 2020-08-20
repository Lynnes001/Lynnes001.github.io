import React from "react"
import containerStyles from "./container.module.css"


export default function ItemContainer({ children }) {
    return <div className={containerStyles.itemContainer}>{children}</div>
}