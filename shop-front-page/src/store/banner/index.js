import {
    read
} from '../../service/banner/bannerApiService'


export default{
    namespaced: true,
    state: {
        mainBanners: [],
    },
    getters: {
        getMainBanners(){
            return this.state.mainBanners;
        },


    },
    mutations: {
        setMainBanners(state, mainBanners){
            state.mainBanners = mainBanners;
        },
    },
    actions: {
        async read({commit}){
            const response = await read();
            commit("setMainBanners", response);
            console.log(response);
        },

    },
    modules: {}
};
