import {axiosService} from "./axios.service";

import {urls} from "../configs/Url";

const userService = {
    getAll : () => axiosService.get(urls.users)
};

export {userService};

