import axios from "axios";
// import store from '@/store/member/index';

const CART_BASE_PATH = 'cart';
// const token = store.state.token;

export const insertCart = (data) => axios.post(CART_BASE_PATH + '',data)
    .then(({data}) => data.result);
export const getCarts = (id) => axios.get(CART_BASE_PATH + '/' + id).then(({data}) => data.result);