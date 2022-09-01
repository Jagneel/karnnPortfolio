import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard(props: projectCardProps) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={props.imgUrl} />
                <div className="proj-txtx">
                    <h4>{props.title}</h4>
                    <span>{props.description}</span>
                </div>
            </div>
        </Col>
    )
}

interface projectCardProps {
    title: string;
    description: string;
    imgUrl: string;
}