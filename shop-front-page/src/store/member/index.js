import {
    create,
    login
} from '../../service/member/memberApiService'
import axios from "axios";

export default{
    namespaced: true,
    state: {
        member: [],
        accessToken:''
    },
    getters:{
      getMember(){
          return this.state.member;
      }
    },
    mutations: {
        //로그인 성공시
        loginSuccess(state, data){
            state.member.id = data.result.id;
            state.token = data.result.token;
        }
    },
    actions: {
        async create({commit}, signupObj){
            await create(signupObj);
        },
        async login({commit}, member){
            await login(member).then((data) => {
                commit("loginSuccess", data)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.result.token}`;
            });
            console.log("member: ", this.state.member)
            console.log("token", this.state.token)
        }
    },
    modules: {}
};
