import {
    create,
    login
} from '../../service/member/memberApiService'


export default{
    namespaced: true,
    state: {
        member: [],
    },
    getters:{
      getMember(){
          return this.state.member;
      }
    },
    mutations: {
        //로그인 성공시
        loginSuccess(state, member){
            state.member.id = member;
        }
    },
    actions: {
        async create({commit}, signupObj){
            await create(signupObj);
        },
        async login({commit}, member){
            const response = await login(member);
            await commit("loginSuccess", response.result.id);
        }
    },
    modules: {}
};
