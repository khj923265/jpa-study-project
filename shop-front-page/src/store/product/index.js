import {
    read,
    getProduct
} from '../../service/product/productApiService'


export default{
    namespaced: true,
    state: {
        products: [],
        product: [],
        bestProducts: [],
    },
    getters: {
        getProducts(){
            return this.state.products;
        },
        getProduct(){
            return this.state.product;
        },
        getBestProducts(){
            return this.state.bestProducts;
        }

    },
    mutations: {
        setProducts(state, products){
            state.products = products;
        },
        setProduct(state, product){
            state.product = product;
        }
    },
    actions: {
        async read({commit}){
            const response = await read();
            commit("setProducts", response);
        },
        async getProduct({commit},id){
            const response = await getProduct(id);
            commit("setProduct", response);
        }


    },
    modules: {}
};
