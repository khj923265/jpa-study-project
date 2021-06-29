import axios from "axios";

const CART_BASE_PATH = 'cart';

export const insertCart = (data) => axios.post(CART_BASE_PATH + '',data)
    .then(({data}) => data.result);
export const getCarts = (id) => axios.get(CART_BASE_PATH + '/' + id)
    .then(({data}) => data.result);