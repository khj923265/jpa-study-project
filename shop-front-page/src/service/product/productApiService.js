import axios from "axios";

const PRODUCT_BASE_PATH = 'product';

export const read = () => axios.get(PRODUCT_BASE_PATH + '')
    .then(({data}) => data.result);
export const getProduct = (id) => axios.get(PRODUCT_BASE_PATH + '/'+id)
    .then(({data}) => data.result);
