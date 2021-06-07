import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Video from "../Video";
import {gapi} from "gapi-script";
import "./index.css"

const VideoGroup = () => {
    const [listVideos, setListVideos] = useState([])
    useEffect(() => {
            gapi.load('client', () => {
                gapi.client.setApiKey("AIzaSyDyKm3KXBrBXWYqWO4ft_pdvjKPg93Dy7o");
                return gapi.client.load("youtube", "v3", async () => {
                    const response = await gapi.client.youtube.videos.list({
                        "snippet": {
                            "channelId": "UCP_IYZTiqbmUqmI3KXHIEoQ"
                        },
                        "part": [
                            "snippet",
                            "statistics",
                            "contentDetails",
                        ],
                        "chart": "mostPopular",
                        "maxResults": 20
                    });
                    const listVideos = response.result.items;
                    console.log(listVideos)
                    setListVideos(listVideos)
                })
            })
        }
        , [])


    return (

        <div className="divVideoGroup" >
            {listVideos.length ? listVideos.map((value) =>
                <Video key={value.id} video={value}/>) : <div></div>}
        </div>
    );
};
const mapStateToProps = (state) => ({
    listVideos: state.listVideos,
});

export default connect(mapStateToProps)(VideoGroup);