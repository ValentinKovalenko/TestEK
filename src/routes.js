import {LOGIN_ROUTE, VIDEO_GROUP_ROUTE, VIDEO_PLAY_ROUTE} from "./utils/constants";
import Login from "./components/Login";
import VideoGroup from "./components/VideoGroup";
import VideoPlay from "./components/VideoPlay";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: VIDEO_GROUP_ROUTE,
        Component: VideoGroup
    },
    {
        path: VIDEO_PLAY_ROUTE,
        Component: VideoPlay
    }
]