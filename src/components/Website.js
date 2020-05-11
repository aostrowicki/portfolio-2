import React from 'react'
import Button from './Button'
import github from '../assets/github.svg'

export default function Website({ title, description, img }) {
    return (
        <div className="websites-item">
            <img src={img} alt="" />
            <h4 className="title">{title}</h4>
            <div className="description">{description}</div>
            <Button square>{<img src={github} alt="" />}</Button>
        </div>
    )
}
