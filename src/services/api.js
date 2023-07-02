import axios from '../utils/axios';

export const callProduct = () => {
    return axios.get(`/api/product`);
};
export const callBanner = () => {
    return axios.get(`/api/product/banner`);
};
export const callTopView = () => {
    return axios.get(`/api/product/topview`);
};
export const callTopNew = () => {
    return axios.get(`/api/product/topnew`);
};
export const callCategory = () => {
    return axios.get(`/api/category`);
};
export const callProductPagination = () => {
    return axios.get(`http://localhost:8888/api/product`);
};