import React from "react"
import PropTypes from "prop-types";
import {OverlayTrigger, Tooltip} from "react-bootstrap";


export const FooterImage = ({src, alt, label, size}) => {
    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id="button-tooltip-2">{label}</Tooltip>
            }
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} style={{width: size, height: size, objectFit: "contain"}} />
        </OverlayTrigger>
    )
}

FooterImage.propTypes = {
    /**
     * The `src` for the image
     */
    src: PropTypes.string.isRequired,
    /**
     * The `alt` for the image
     */
    alt: PropTypes.string.isRequired,
    /**
     * The description when they hover over the image
     */
    label: PropTypes.string.isRequired,

    /**
     * This is the height and width of the image that needs to be passed through,
     * because it's `object-fit: contain`, we only need to pass in one pixel size. If we do that, it will
     * automatically fit to itself
     */
    size: PropTypes.string.isRequired,
}

FooterImage.defaultProps = {
    src: 'https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png',
    alt: "next Logo",
    label: "This is a sample Footer Image",
    size: "50px",
}
