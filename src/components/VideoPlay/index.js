import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player'
import {gapi} from "gapi-script";
import {Accordion, Card, Container} from "react-bootstrap";
import "./index.css"

const VideoPlay = (props) => {

        const [videoPlay, setVideoPlay] = useState([])
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [viewCount, setViewCount] = useState('')
        const [likeCount, setLikeCount] = useState('')
        const [favoriteCount, setFavoriteCount] = useState('')
        const [commentCount, setCommentCount] = useState('')

        useEffect(() => {
                gapi.load('client', () => {
                    gapi.client.setApiKey("AIzaSyDyKm3KXBrBXWYqWO4ft_pdvjKPg93Dy7o");
                    return gapi.client.load("youtube", "v3", async () => {
                        const response = await gapi.client.youtube.videos.list({
                            "part": [
                                "snippet",
                                "statistics",
                                "contentDetails",
                            ],
                            "id": [
                                id
                            ]
                        });
                        const videoPlay = response.result.items[0];
                        setVideoPlay(videoPlay)
                        setTitle(videoPlay.snippet.title)
                        setDescription(videoPlay.snippet.description)
                        setViewCount(videoPlay?.statistics?.viewCount)
                        setLikeCount(videoPlay?.statistics?.likeCount)
                        setFavoriteCount(videoPlay?.statistics?.favoriteCount)
                        setCommentCount(videoPlay?.statistics?.commentCount)
                    })
                })
            }
            , [])


        const id = props.location.search.replace("?id=", "")
        const link = "https://www.youtube.com/watch?v="
        const urlVideo = link.concat(id)

        return (
            <Container>
                <div>
                    <ReactPlayer
                        controls={true}
                        url={urlVideo}
                    />
                </div>
                {title ? <div>
                    <p>{title}</p>
                    <i className="bi bi-hand-thumbs-up-fill">{likeCount}</i>
                    <i className="bi bi-pen-fill">{commentCount}</i>
                    <div>{viewCount} views</div>
                    <Accordion>
                        <Card className="divVideoPlay">
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
                    <p>{favoriteCount}</p>
                </div> : <p>Error</p>}
            </Container>
        )
            ;
    }
;

export default VideoPlay;