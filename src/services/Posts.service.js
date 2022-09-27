import {axiosService} from "./axios.service";

import {urls} from "../config";

const PostsService = {
    getAll: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {PostsService};