import React from 'react'
import style from '../styles/scorecard.module.scss'

export default function ResultCard(props) {
    return (
        <div className={style.scoreCard}>
            Score - {props.score}
        </div>
    )
}
