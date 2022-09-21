  import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.users, user)
    // createComment: (id) => axiosService.get(`${urls.comments}/${id}`),

};

export {
    userService
};