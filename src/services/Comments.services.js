import {axiosService} from "./axios.service";

import {urls} from "../config";

const CommentsService = {
    getAll: () => axiosService.get(urls.comments)
};

export {CommentsService};