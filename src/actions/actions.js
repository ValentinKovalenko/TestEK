import {actionsTypes} from "../store/reducer/videoReducer";
import {gapi} from "gapi-script";
import {store} from "../store";

export const getVideoList = () => {
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
            console.log(response)
            const listVideos = response.result.items;
            store.dispatch({type: actionsTypes.VIDEO_LIST, payload: listVideos})
        })
    })
}

export const getVideoById = (id) => {
   return  gapi.load('client', () => {
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
            console.log(response)
            return response
            const listVideos = response.result.items;
            store.dispatch({type: actionsTypes.VIDEO_LIST, payload: listVideos})
        })
    })
}
