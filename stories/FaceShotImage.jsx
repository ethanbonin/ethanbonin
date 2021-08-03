import React from "react"
import styles from "../styles/faceshotimage.module.css"

//  next/image does **not** support styling, so I had to use the regular <img/> component to use the css style
export const FaceShotImage = () => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.logo} src={"https://github.com/ethanbonin/ethanbonin/raw/develop/public/face-shot.png"} alt={"face-shot"} />
    )
}

FaceShotImage.propTypes = {}
FaceShotImage.defaultProps = {}
