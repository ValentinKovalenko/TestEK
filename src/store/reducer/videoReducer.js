export const actionsTypes = {
    VIDEO_LIST: 'VIDEO_LIST',
}

const initialState = {
    listVideos: null
}

export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.VIDEO_LIST:
            return {
                ...state,
                listVideos: action.payload,
            };
        default:
            return state
    }
};