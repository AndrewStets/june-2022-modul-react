import {axiosService} from "./axios.service";

import {urls} from "../config";

const AlbumsService = {
    getAll: () => axiosService.get(urls.albums)
};

export {AlbumsService};