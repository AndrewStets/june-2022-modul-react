import {axiosService} from "./axios.service";

import {urls} from "../configs/Url";

const postService = {
    getAll: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
};

export {postService};