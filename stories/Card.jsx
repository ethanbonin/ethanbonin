import React from "react"
import PropTypes from "prop-types"
import styles from '../styles/card.module.css'
import { Card } from "react-bootstrap"

/**
 * Primary UI component for user interaction
 */
export const PrimaryCard = ({ label, onClick }) => {
    return (
        <Card
            style={{ width: "17rem", height: "12rem" }}
            className={styles.card}
            onClick={onClick}
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
