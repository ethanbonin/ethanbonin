import React from "react"
import PropTypes from "prop-types"
import "./card.css"
import { Card } from "react-bootstrap"

/**
 * Primary UI component for user interaction
 */
export const PrimaryCard = ({ label }) => {
    return (
        <Card
            style={{ width: "15rem", height: "12rem" }}
            className={[".card"].join(" ")}
        >
            <Card.Text style={{textAlign: "center"}}>
                {label.toUpperCase()}
            </Card.Text>
        </Card>
    )
}

PrimaryCard.propTypes = {
    /**
     * Card Title
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
}

PrimaryCard.defaultProps = {
    label: "My Awesome Card",
    onClick: undefined,
}
