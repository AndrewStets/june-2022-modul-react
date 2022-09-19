import axios from "axios";

const axiosService = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'});


const getUsersAxios = () => {
    return axiosService.get()
};

const getUserAxios = (id) => {
    return axiosService.get('/' + id)
};

const getPostsAxios = (id) => {
    return axiosService.get('/' + id + '/posts')
};

export {axiosService};
export {getUsersAxios,getUserAxios,getPostsAxios}