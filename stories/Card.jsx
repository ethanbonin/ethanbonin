import React from "react"
import PropTypes from "prop-types"
import styles from '../styles/card.module.css'
import { Card } from "react-bootstrap"
import Link from 'next/link'

/**
 * Primary UI component for user interaction
 */
export const PrimaryCard = ({ label, href, onClick }) => {
    return (
        <Link href={href}>
            <Card
                style={{ width: "17rem", height: "12rem" }}
                className={styles.card}
                onClick={onClick}
            >
                <Card.Text style={{textAlign: "center"}}>
                    {label.toUpperCase()}
                </Card.Text>
            </Card>
        </Link>
    )
}

PrimaryCard.propTypes = {
    /**
     * Card Title
     */
    label: PropTypes.string.isRequired,
    /**
     * the endpoint that the card will route to
     */
    href: PropTypes.string.isRequired,
}

PrimaryCard.defaultProps = {
    label: "My Awesome Card",
}
