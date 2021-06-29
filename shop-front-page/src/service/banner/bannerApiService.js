import axios from "axios";

const PRODUCT_BASE_PATH = 'banner';

export const read = () => axios.get(PRODUCT_BASE_PATH + '')
    .then(({data}) => data.result);