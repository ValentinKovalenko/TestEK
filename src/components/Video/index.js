import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import "./index.css"
import {NavLink} from "react-router-dom";

const Video = ({video}) => {

    const id = video.id

    const title = video.snippet.title
    const description = video.snippet.description
    const thumbnails = video.snippet.thumbnails.medium.url
    const viewCount = video.statistics.viewCount
    const likeCount = video.statistics.likeCount
    const favoriteCount = video.statistics.favoriteCount
    const commentCount = video.statistics.commentCount

    return (
        <Card className="cardVideo" style={{width: '19rem'}}>
            <Card.Body>
                <NavLink to = {{pathname:'/videoPlay',
                search: `?id=${id}`}}>
                <Card.Img variant="top" src={thumbnails}/>
                </NavLink>
                <div>{title}</div>
                <div>{viewCount} views</div>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle variant="link" eventKey="0">
                                Info
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <i className="bi bi-hand-thumbs-up-fill">{likeCount}</i>
                <i className="bi bi-pen-fill">{commentCount}</i>
                <p>{favoriteCount}</p>
            </Card.Body>
        </Card>
    );
};

export default Video;