import axios from "axios";

// const instance = axios.create({
//     baseURL:'http://localhost:8083',
//     timeout: 1000,
//     headers: {'X-AUTH-TOKEN': store.state["member/token"]}
// });
//
// instance.interceptors.request.use(
//     function (config) {
//         config.headers = {'X-AUTH-TOKEN': store.state["member/token"]}
//         return config;
//     },
//     function (error) {
//         // 요청 에러 직전 호출됩니다.
//         return Promise.reject(error);
//     }
// );

const PRODUCT_BASE_PATH = 'product';

export const read = () => axios.get(PRODUCT_BASE_PATH + '')
    .then(({data}) => data.result);

export const getProduct = (id) => axios.get(PRODUCT_BASE_PATH + '/'+id)
    .then(({data}) => data.result);
