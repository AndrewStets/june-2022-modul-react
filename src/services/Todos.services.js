import {axiosService} from "./axios.service";

import {urls} from "../config";

const TodosService = {
    getAll: () => axiosService.get(urls.todos)
};

export {TodosService};