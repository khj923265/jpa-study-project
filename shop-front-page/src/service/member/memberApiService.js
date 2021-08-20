import axios from "axios";
// import store from '@/store/member/index';

const MEMBER_BASE_PATH = 'member';
// const token = store.state.token;

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const create = (data) => axios.post(MEMBER_BASE_PATH + '/signup', data)
    .then(({data}) => data)
export const login = (member) => axios.post('/login', member,{
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-type' : 'multipart/form-data',
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
}).then(({data}) => data)
