import React from "react"
import "./faceshotimage.module.css"
import flow from '../face-shot.png'

//  next/image does **not** support styling, so I had to use the regular <img/> component to use the css style
export const FaceShotImage = () => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="App-logo" src={flow} alt={"face-shot"} />
    )
}

FaceShotImage.propTypes = {}
FaceShotImage.defaultProps = {}
